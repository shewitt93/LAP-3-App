const initialState = {
   user: {
     id: 2,
     name: "Atheer",
     habits: [
      {id: 1, name:'Water', description: 'Drink 8 glasses per day', streak: 6, latest_date: '2020-09-07'},
      {id: 2, name:'Sleep', description: 'Sleep 8 hours a night', streak: 8, latest_date: '2020-09-07'},
      ]
    }
 };

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    
    default: return state
  }
};

export default Reducer;
