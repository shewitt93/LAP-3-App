// const initialState = {
//   user: {
//     id: 2,
//     name: "Atheer",
//     habits: [
//       {
//         name: "Water",
//         description: "Drink 8 glasses per day",
//         streak: 6,
//         latest_date: "2020-09-07",
//       },
//       {
//         name: "Sleep",
//         description: "Sleep 8 hours a night",
//         streak: 8,
//         latest_date: "2020-09-07",
//       },
//     ],
//   },
// };

const initState = { name: "User", habits: [] };

function HabitReducer(state = initState, action) {
  let idx;
  switch (action.type) {
    case "LOAD_NAME":
      return { ...state, name: action.payload };
    case "LOAD_ACTIVITIES":
      return { ...state, habits: action.payload };
    case "delete_habit":
      return { ...state, habits: action.payload };
    default:
      return state;
  }
}
// const Reducer = (state = initialState, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

export default HabitReducer;
