// CONSTANTES actions
const ADD_COMENT = 'ADD_COMENT'
const DELETE_COMENT = 'DELETE_COMENT'
const APROVE_COMENT = 'APROVE_COMENT'
const CLEAN_COMENT = 'CLEAN_COMENT'

// actions
const actionAddComent = () => {
  return {
    type: ADD_COMENT
    // payload
  }
}

const aproveComent = () => {
  return {
    type: APROVE_COMENT
    // payload
  }
}

const deleteComent = () => {
  return {
    type: DELETE_COMENT
    // payload
  }
}


const cleanComent = () => {
  return {
    type: CLEAN_COMENT
    // payload
  }
}

export {
  actionAddComent,
  aproveComent,
  deleteComent,
  cleanComent
}
