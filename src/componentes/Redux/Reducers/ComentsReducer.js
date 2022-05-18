// initializer
const INITIAL_COMENTS = {
  stateComent: ''
}

// reducer
function ComentsReducer(state = INITIAL_COMENTS, action) {
  switch (action.type) {
    case 'ADD_COMENT':
      return { stateComent: 'Adicionar comentário' }
    case 'DELETE_COMENT':
      return { stateComent: 'Deletar comentário' }
    case 'APROVE_COMENT':
      return { stateComent: 'Aprovar comentário' }
    case 'CLEAN_COMENT':
      return { stateComent: 'Limpar todos os comentários' }
      break;
    default:
      return state
  }
}

export default ComentsReducer
