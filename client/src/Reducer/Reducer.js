const initialState = {
   user: {
     id: 2,
     name: "Atheer",
     habits: [
      { name:'Water', description: 'Drink 8 glasses per day', streak: 6, latest_date: '2020-09-07'},
      { name:'Sleep', description: 'Sleep 8 hours a night', streak: 8, latest_date: '2020-09-07'},
      ]
    }
 };

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    
    default: return state
  }
};

export default Reducer;
