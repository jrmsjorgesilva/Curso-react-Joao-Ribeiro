import { createStore } from 'redux'
import ComentsReducer from '../Reducers/ComentsReducer'

const store = createStore(ComentsReducer);

export default store
