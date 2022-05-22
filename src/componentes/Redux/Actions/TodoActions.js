// constantes Redux
const DELETE_TODO = 'DELETE_TODO';
const UPDATE_TODO = 'UPDATE_TODO';
const ADD_TODO = 'ADD_TODO';

// actions functions

const addAction = (value) => {
  return {
    type: ADD_TODO,
    payload: value
  }
}

const updateAction = (value) => {
  return {
    type: UPDATE_TODO,
    payload: value
  }
}

const deleteAction = (value) => {
  return {
    type: DELETE_TODO,
    payload: value
  }
}

export {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  addAction,
  updateAction,
  deleteAction
}
