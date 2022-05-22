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

const FixitReducer = (state = INITIAL_FIXIT_ITEM, action) => {
  switch (action.type) {
    case ADD_FIXIT_ITEM:
      return { fixitItem: 'adicionado' }
      break;
    case DELETE_FIXIT_ITEM:
      return { fixitItem: action.payload }
    default:
      return state;
  }
}

export default FixitReducer;
