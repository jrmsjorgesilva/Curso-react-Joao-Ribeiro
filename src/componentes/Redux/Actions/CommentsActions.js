// CONSTANTES actions
const ADD_COMMENT = 'ADD_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'
const APROVE_COMMENT = 'APROVE_COMMENT'
const CLEAN_COMMENT = 'CLEAN_COMMENT'

// actions
const actionAddComment = () => {
  return {
    type: ADD_COMMENT
    // payload
  }
}

const aproveComment = () => {
  return {
    type: APROVE_COMMENT
    // payload
  }
}

const deleteComment = () => {
  return {
    type: DELETE_COMMENT
    // payload
  }
}


const cleanComment = () => {
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
  actionAddComment,
  aproveComment,
  deleteComment,
  cleanComment,
}
