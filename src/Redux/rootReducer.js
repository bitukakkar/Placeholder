import { combineReducers } from 'redux'
import demo from './Reducers/demo'

const createRootReducer = () =>
  combineReducers({
    demo
  })

export default createRootReducer
