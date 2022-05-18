import React from 'react'
import { INCREMENT, DECREMENT, CLEAN } from '../Actions/Action'

const initialCount = {
  count: 0
}

function Reducer(state = initialCount, action) {
  switch (action.type) {
    case INCREMENT:
      return { count: state + 1 }
      break;
    case DECREMENT:
      return { count: state - 1 }
      break;
    case CLEAN:
      return { count: state * 1 }
      break;
    default:
      return state;
  }
}

export default Reducer
