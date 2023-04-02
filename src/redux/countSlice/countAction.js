import {decrement, increment} from './countReducer';

export const incrementAction = () => dispatch => {
  console.log('incrementAction');
  // debugger;
  dispatch(increment());
};

export const decrementAction = state => dispatch => {
  dispatch(decrement());
};
