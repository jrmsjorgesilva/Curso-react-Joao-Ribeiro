// constantes Redux
const DELETE = 'DELETE';
const UPDATE = 'UPDATE';
const CREATE = 'CREATE';
const READ = 'READ';

// actions functions

const createAction = (value) => {
  return {
    type: CREATE,
    payload: value
  }
}

const readAction = () => {
  return {
    type: READ
  }
}

const updateAction = (value) => {
  return {
    type: UPDATE,
    payload: value
  }
}

const deleteAction = (value) => {
  return {
    type: DELETE,
    payload: value
  }
}

export {
  createAction,
  readAction,
  updateAction,
  deleteAction
}
