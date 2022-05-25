import { ADD_COMMENT, DELETE_COMMENT, APROVE_COMMENT, CLEAN_COMMENT } from '../Actions/CommentsActions'

// initializer
const INITIAL_COMMENTS = {
  comment: []
}

// reducer
function CommentsReducer(state = INITIAL_COMMENTS, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return { comment: action.payload }
    case DELETE_COMMENT:
      return { comment: 'Deletar comentário' }
    case APROVE_COMMENT:
      return { comment: 'Aprovar comentário' }
    case CLEAN_COMMENT:
      return { comment: 'Limpar todos os comentários' }
    default:
      return state
  }
}

export default CommentsReducer;
