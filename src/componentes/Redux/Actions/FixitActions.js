// constantes
const ADD_FIXIT_ITEM = 'ADD_FIXIT_ITEM';
const DELETE_FIXIT_ITEM = 'ADD_FIXIT_ITEM';

//Action
const addFixitAction = () => {
  return {
    type: ADD_FIXIT_ITEM,
  }
}

const deleteFixitAction = (value) => {
  return {
    type: DELETE_FIXIT_ITEM,
    payload: value
  }
}

export {
  deleteFixitAction,
  addFixitAction,
  ADD_FIXIT_ITEM,
  DELETE_FIXIT_ITEM,
}
