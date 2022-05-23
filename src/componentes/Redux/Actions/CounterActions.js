import React from 'react'

// CONSTANT DECLARATION
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const CLEAN = 'CLEAN'

// Actions
const incrementAction = (value) => {
  return {
      type: INCREMENT,
      payload: value
  }
}

const decrementAction = (value) => {
  return {
    type: DECREMENT,
    payload: value
  }
}

const cleanAction = () => {
  return {
    type: CLEAN
  }
}

export {
  incrementAction,
  decrementAction,
  cleanAction
}
