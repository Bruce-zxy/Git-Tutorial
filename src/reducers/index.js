import { combineReducers }  from 'redux';

export const actions = {
  RD_COUNT_ADD: 'RD_COUNT_ADD',
  RD_COUNT_SUB: 'RD_COUNT_SUB',
  add: (n) => ({
    type: actions.RD_COUNT_ADD,
    payload: n
  }),
  sub: (n) => ({
    type: actions.RD_COUNT_SUB,
    payload: n
  })
};

function app (state={count: 1}, action) {
  switch (action.type) {
    case actions.RD_COUNT_ADD:
      return({count: state.count + action.payload});
      // break;
    case actions.RD_COUNT_SUB:
      return({count: state.count - action.payload});
      // break;
    default:
      return(state);
  }
}


export default combineReducers({
  app
});
