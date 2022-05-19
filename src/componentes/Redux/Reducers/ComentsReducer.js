// initializer
const INITIAL_COMENTS = {
  coment: 'Nenhum Comentário'
}

// reducer
function ComentsReducer(state = INITIAL_COMENTS, action) {
  switch (action.type) {
    case 'ADD_COMENT':
      return { coment: 'Adicionar comentário' }
    case 'DELETE_COMENT':
      return { coment: 'Deletar comentário' }
    case 'APROVE_COMENT':
      return { coment: 'Aprovar comentário' }
    case 'CLEAN_COMENT':
      return { coment: 'Limpar todos os comentários' }
      break;
    default:
      return state
  }
}

export default ComentsReducer
