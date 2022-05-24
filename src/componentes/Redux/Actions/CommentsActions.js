// CONSTANTES actions
const ADD_COMMENT = 'ADD_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'
const APROVE_COMMENT = 'APROVE_COMMENT'
const CLEAN_COMMENT = 'CLEAN_COMMENT'

// actions
const addCommentAction = (value) => {
  return {
    type: ADD_COMMENT,
    payload: value
  }
}

const aproveCommentAction = () => {
  return {
    type: APROVE_COMMENT
    // payload
  }
}

const deleteCommentAction = () => {
  return {
    type: DELETE_COMMENT
    // payload
  }
}


const cleanCommentAction = () => {
  return {
    type: CLEAN_COMMENT
    // payload
  }
}

export {
  ADD_COMMENT,
  DELETE_COMMENT,
  APROVE_COMMENT,
  CLEAN_COMMENT,
  addCommentAction,
  aproveCommentAction,
  deleteCommentAction,
  cleanCommentAction,
}
