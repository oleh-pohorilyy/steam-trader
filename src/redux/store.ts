import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { itemsReducer } from './reducers'

const reducers = combineReducers({
    items: itemsReducer
})

export const store = createStore(reducers, applyMiddleware(thunk))