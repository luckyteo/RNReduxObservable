import { INCREASE, DECREASE, STOP_COUNTER } from '../actions/types';

const initialState = 0;

export default function (state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;

    case DECREASE:
      return state - 1;

    case STOP_COUNTER:
      return 0;

    default:
      return state;
  }
}