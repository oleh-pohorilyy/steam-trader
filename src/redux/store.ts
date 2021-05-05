import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import ItemsReducer from './reducers/ItemsReducer'

const reducers = combineReducers({
    items: ItemsReducer
})

export const store = createStore(reducers, applyMiddleware(thunk))