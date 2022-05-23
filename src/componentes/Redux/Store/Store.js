import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import ComentsReducer from '../Reducers/ComentsReducer'
import ContadorReducer from '../Reducers/CounterReducer'
import InvertextoReducer from '../Reducers/InvertextoReducer'
import CardsReducer from '../Reducers/CardsReducer'
import TodoReducer from '../Reducers/TodoReducer'
import FixitReducer from '../Reducers/FixitReducer'
import FeiraReducer from '../Reducers/FeiraReducer'

const store = createStore(combineReducers(
  {
    ComentsReducer,
    ContadorReducer,
    CardsReducer,
    InvertextoReducer,
    TodoReducer,
    FixitReducer,
    FeiraReducer,
  }
), applyMiddleware(thunk));

export default store
