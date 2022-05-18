// CONSTANTES actions
const ADD_COMENT = 'ADD_COMENT'
const DELETE_COMENT = 'DELETE_COMENT'
const APROVE_COMENT = 'APROVE_COMENT'
const CLEAN_COMENT = 'CLEAN_ADD'

// actions
const actionAddComent = (value) => {
  return {
    type: ADD_COMENT,
    payload
  }
}

const aproveComent = (value) => {
  return {
    type: DELETE_COMENT,
    payload
  }
}

const deleteComent = (value) => {
  return {
    type: APROVE_COMENT,
    payload
  }
}


const cleanComents = (value) => {
  return {
    type: CLEAN_COMENT,
    payload
  }
}

export {
  actionAddComent,
  aproveComent,
  deleteComent,
  cleanComents
}
