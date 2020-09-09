export const loading = (p) => ({ type: "LOAD_USER", payload: p });

export const loadHabit = (data) => ({
  type: "LOAD_HABIT",
  payload: [...data],
});

export const getHabitData = (username) => {
  return async (dispatch) => {
    try {
      const resp = await fetch(`http://localhost:3000/user/dashboard`);
      const habit = await resp.json();
      dispatch(loadHabit);
    } catch (err) {
      throw new Error(err.messsage);
    }
  };
};
