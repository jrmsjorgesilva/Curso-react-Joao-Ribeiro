import React from 'react'

const initialCount = {
  count: 0
}

const Reducer = (state = initialCount, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { state: state + 1 }
      break;
    case 'DECREMENT':
      return { state: state - 1 }
      break;
    case 'CLEAN':
      return { state: state * 1 }
      break;
    default:

  }
}

export default Reducer
