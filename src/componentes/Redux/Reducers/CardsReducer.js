const INITIAL_CARD = {
  status: 'Confirme ou rejeite'
}

function CardsReducer(state = INITIAL_CARD, action) {
  switch (action.type) {
    case 'CONFIRMED':
      return { status: 'Foi Confirmado' }
    case 'REJECTED':
      return { status: 'Foi Rejeitado' }
    default:
      return state
  }
}

export default CardsReducer
