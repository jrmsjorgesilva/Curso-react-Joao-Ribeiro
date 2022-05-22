import { combineReducers, createStore } from 'redux'
import ComentsReducer from '../Reducers/ComentsReducer'
import ContadorReducer from '../Reducers/CounterReducer'
import InvertextoReducer from '../Reducers/InvertextoReducer'
import CardsReducer from '../Reducers/CardsReducer'
import TodoReducer from '../Reducers/TodoReducer'
import FixitReducer from '../Reducers/FixitReducer'

const store = createStore(combineReducers(
  {
    ComentsReducer,
    ContadorReducer,
    CardsReducer,
    InvertextoReducer,
    TodoReducer,
    FixitReducer,
  }
));

export default store
