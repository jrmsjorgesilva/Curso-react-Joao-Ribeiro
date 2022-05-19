import { createStore } from 'redux'
// import ComentsReducer from '../Reducers/ComentsReducer'
// import ContadorReducer from '../Reducers/ComentsReducer'
import InvertextoReducer from '../Reducers/InvertextoReducer'

const store = createStore(InvertextoReducer);

export default store
