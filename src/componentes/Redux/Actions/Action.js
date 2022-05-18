import React from 'react'

// CONSTANT DECLARATION
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const CLEAN = 'CLEAN'

// Actions
export const incrementAction = () => ({
    type: INCREMENT
})

export const decrementAction = () => ({
  type: DECREMENT
})

export const cleanAction = () => ({
  type: CLEAN
})

// export default = {
//   incrementAction,
//   decrementAction,
//   cleanAction
// }
