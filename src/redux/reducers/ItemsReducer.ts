import { combineReducers } from "redux"
import { ActionType } from "../../types/redux/ActionType"
import { DotaItem } from "../../types/DotaItem"

function items(state: Array<DotaItem> = [], action: ActionType): Array<DotaItem>{
    switch(action.type){
        case 'SET_ITEMS': return action.payload
        default: return state
    }
}

export default combineReducers({ items })