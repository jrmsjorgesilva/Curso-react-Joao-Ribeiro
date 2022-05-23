// constantes
const ADD_FRUTA = 'ADD_FRUTA';
const DELETE_FRUTA = 'DELETE_FRUTA';

// actions
const addFrutaAction = (value) => {
  return {
    type: ADD_FRUTA,
    payload: value
  }
}

const deleteFrutaAction = (value) => {
  return {
    type: DELETE_FRUTA,
    payload: value
  }
}

export {
  ADD_FRUTA,
  DELETE_FRUTA,
  deleteFrutaAction,
  addFrutaAction,
}
