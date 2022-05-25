import { 
  ADD_COMMENT, 
  DELETE_COMMENT, 
  APROVE_COMMENT, 
  CLEAN_COMMENT, 
  LIKE_COMMENT, 
  DISLIKE_COMMENT, 
  EDIT_COMMENT 
} from '../Actions/CommentsActions'

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
      return state.comment.filter(elem => elem.id !== action.payload)
    case APROVE_COMMENT:
      return { comment: 'Aprovar comentário' }
    case CLEAN_COMMENT:
      return { comment: 'Limpar todos os comentários' }
    case LIKE_COMMENT:
      return { comment: 'mais um like' }
    case DISLIKE_COMMENT:
      return { comment: 'Mais um dislike' }
    case EDIT_COMMENT:
      return { comment: 'Editando comentario' }
    default:
      return state
  }
}

export default CommentsReducer;
