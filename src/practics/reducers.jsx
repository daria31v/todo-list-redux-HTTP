//I step type actions
const deposit = amount => {
  return {
    type: 'deposit',
    payload: { amount },
  };
};
//I step Reducer for actions
function fundsReducer(state = 0, action) {
  switch (action.type) {
    case 'deposit':
      return state + action.payload.amount;

    default:
      return state;
  }
}
//I step store
const store = createStore(fundsReducer);

//II step!! interface
<button onClick={REDUX.dispatch(deposit(100))}>OK</button>;
