import React from 'react'

// CONSTANT DECLARATION
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const CLEAN = 'CLEAN'

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
