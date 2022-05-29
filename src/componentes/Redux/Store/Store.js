import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import CommentsReducer from '../Reducers/CommentsReducer'
import ContadorReducer from '../Reducers/CounterReducer'
import InvertextoReducer from '../Reducers/InvertextoReducer'
import CardsReducer from '../Reducers/CardsReducer'
import TodoReducer from '../Reducers/TodoReducer'
import FixitReducer from '../Reducers/FixitReducer'
import FeiraReducer from '../Reducers/FeiraReducer'
import BankAccountReducer from '../Reducers/BankAccountReducer'
import PomodoroReducer from '../Reducers/PomodoroReducer'

const store = createStore(combineReducers(
  {
    CommentsReducer,
    ContadorReducer,
    CardsReducer,
    InvertextoReducer,
    TodoReducer,
    FixitReducer,
    FeiraReducer,
    BankAccountReducer,
    PomodoroReducer,
  }
), applyMiddleware(thunk));

export default store
