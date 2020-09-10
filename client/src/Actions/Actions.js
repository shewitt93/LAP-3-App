const loadActivities = (data) => ({
  type: "LOAD_ACTIVITIES",
  payload: data,
});

export const getActivities = () => {
  return async (dispatch) => {
    try {
      const options = {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          token: localStorage.user,
        },
      };
      const resp = await fetch(`http://localhost:3000/dashboard`, options);
      const habit = await resp.rows.json();
      dispatch(loadActivities(habit));
    } catch (err) {
      throw new Error(err.messsage);
    }
  };
};

export const deleteHabit = (id) => ({ type: "delete_habit", payload: id });

export const completeHabit = (id) => ({ type: "complete_habit", payload: id });
