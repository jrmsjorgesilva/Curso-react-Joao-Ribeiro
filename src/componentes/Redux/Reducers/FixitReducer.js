import {ADD_FIXIT_ITEM, DELETE_FIXIT_ITEM} from '../Actions/FixitActions'

const INITIAL_FIXIT_ITEM = {
  fixitItem: [
    {
      id: 1,
      name: 'Placa Mãe',
    },
    {
      id: 2,
      name: 'Processador',
    },
    {
      id: 3,
      name: 'Memória DDR4',
    }
  ]
}

const FixitReducer = (state = INITIAL_FIXIT_ITEM || [], action) => {
  switch (action.type) {
    case ADD_FIXIT_ITEM:
      // console.log("...state.fixitItem, action.payload", ...state.fixitItem, action.payload);
      return { fixitItem: [...state.fixitItem, {id: Math.floor(Math.random() * 10000), name: action.payload}] }
    case DELETE_FIXIT_ITEM:
      return {fixitItem: state.fixitItem.filter(item => item.id !== action.payload)}
    default:
      return state;
  }
}

// payload: 3
// action: { 'DELETE_FIXIT_ITEM', 3}
// state.fixitItem: [0, 1, 2]
// state.fixitItem[0]: {id: 1, name: 'Placa Mãe'}

export default FixitReducer;
