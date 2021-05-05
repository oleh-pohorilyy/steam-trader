import { combineReducers } from "redux"
import { ActionType } from "../../types/ActionType"
import { Item } from "../../types/Item"

function items(state: Array<Item> = [], action: ActionType): Array<Item>{
    switch(action.type){
        case 'SET_ITEMS': return action.payload
        default: return state
    }
}

export default combineReducers({ items })