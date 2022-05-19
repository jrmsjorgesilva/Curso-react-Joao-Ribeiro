import React from 'react'


const INITIAL_INVERTEXTO = {
  text: 'A preencher'
}

export default function InvertextoReducer(state = INITIAL_INVERTEXTO, action) {
  switch (action.type) {
      case 'INVERTEXTO':
        return { text: 'texto foi preenchido'}
      break;
    default:
      return state
  }
}
