// CONSTANTES actions
const ADD_COMMENT = 'ADD_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'
const APROVE_COMMENT = 'APROVE_COMMENT'
const CLEAN_COMMENT = 'CLEAN_COMMENT'
const LIKE_COMMENT = 'LIKE_COMMENT'
const DISLIKE_COMMENT = 'DISLIKE_COMMENT'
const EDIT_COMMENT = 'EDIT_COMMENT'


// adiciona comentario
const addCommentAction = (value) => {
  return (dispatch) => {
    return {
      type: ADD_COMMENT,
      payload: value
    }
  }
}

//  aprova comentario
const aproveCommentAction = () => {
  return (dispatch) => {
    return {
      type: APROVE_COMMENT
      // payload
    }
  }
}

// deleta um comentario
const deleteCommentAction = (id) => {
  return (dispatch) => {
    return {
      type: DELETE_COMMENT,
      payload: id
    }
  }
}

// limpa os comentarios
const cleanCommentAction = () => {
  return (dispatch) => {
    return {
      type: CLEAN_COMMENT
    }
  }
}

// adiciona like
const likeAction = (value) => {
  return (dispatch) => {
    return {
      type: LIKE_COMMENT,
      payload: value
    }
  }
}

// adiciona dislike
const dislikeAction = (value) => {
  return (dispatch) => {
    return {
      type: DISLIKE_COMMENT,
      payload: value
    }
  }
}

// edita comentario
const editAction = (value) => {
  return (dispatch) => {
    return {
      type: EDIT_COMMENT,
      payload: value
    }
  }
}

// 

export {
  ADD_COMMENT,
  DELETE_COMMENT,
  APROVE_COMMENT,
  CLEAN_COMMENT,
  LIKE_COMMENT,
  DISLIKE_COMMENT,
  EDIT_COMMENT,
  addCommentAction,
  aproveCommentAction,
  deleteCommentAction,
  cleanCommentAction,
  likeAction,
  dislikeAction,
  editAction,
}
