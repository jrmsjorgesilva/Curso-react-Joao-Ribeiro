import { combineReducers, createStore } from 'redux'
import ComentsReducer from '../Reducers/ComentsReducer'
import ContadorReducer from '../Reducers/ComentsReducer'
import InvertextoReducer from '../Reducers/InvertextoReducer'
import CardsReducer from '../Reducers/CardsReducer'

const store = createStore(combineReducers(
  {
    ComentsReducer,
    ContadorReducer,
    CardsReducer,
    InvertextoReducer
  }
));

export default store
