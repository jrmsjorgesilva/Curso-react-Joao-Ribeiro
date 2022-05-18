import React from 'react'
import { INCREMENT, DECREMENT, CLEAN } from '../Actions/CounterActions'

const INITIAL_COUNT = {
  count: 0
}

function CounterReducer(state = INITIAL_COUNT, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }
      break;
    case 'DECREMENT':
      return { count: state.count - 1 }
      break;
    case 'CLEAN':
      return { count: state.count * 0 }
      break;
    default:
      return state;
  }
}

export default CounterReducer
