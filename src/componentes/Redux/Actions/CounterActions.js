import React from 'react'

// CONSTANT DECLARATION
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const CLEAN = 'CLEAN'

// Actions
const incrementAction = () => {
  return {
      type: INCREMENT
  }
}

const decrementAction = () => {
  return {
    type: DECREMENT
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
