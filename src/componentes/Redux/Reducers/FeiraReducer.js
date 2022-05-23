import { ADD_FRUTA, DELETE_FRUTA } from '../Actions/FeiraActions'

const INITIAL_FRUTAS = {
  frutas: [
    {
      id: 1,
      name: 'goiaba',
    },
    {
      id: 2,
      name: 'banana',
    },
    {
      id: 3,
      name: 'abacaxi',
    }
  ]
}

const FeiraReducer = (state = INITIAL_FRUTAS, action) => {
  switch (action.type) {
    case ADD_FRUTA:
      // console.log("...state.frutas, action.payload", ...state.frutas, action.payload);
      return { frutas: [...state.frutas, {id: Math.floor(Math.random() * 100), name: action.payload}] }
    case DELETE_FRUTA:
      // return console.log(state.frutas.filter(f => f.id !== action.payload))
      return { frutas: state.frutas.filter(f => f.id !== action.payload) }
    default:
      return state
  }
}

export default FeiraReducer;
