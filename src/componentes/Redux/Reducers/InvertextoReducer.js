import React from 'react'
import { INVERTEXTO } from '../Actions/InvertextoActions';


const INITIAL_INVERTEXTO = {
  text: 'A preencher'
}

const InvertextoReducer = (state = INITIAL_INVERTEXTO, action) => {
  switch (action.type) {
    case INVERTEXTO:
      return { text: action.payload.split('').reverse().join('') };
    default:
      return state
  }
}

export default InvertextoReducer;