export const loading = (p) => ({ type: "LOAD_USER", payload: p });

export const loadHabit = (data) => ({
  type: "LOAD_HABIT",
  payload: [...data],
});
