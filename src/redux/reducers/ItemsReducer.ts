import { combineReducers } from "redux"
import { ActionType } from "../../types/redux/ActionType"
import { DotaItem } from "../../types/DotaItem"

type ItemsInitialStateType = Array<DotaItem>

function items(state: ItemsInitialStateType = [], action: ActionType): ItemsInitialStateType{
    switch(action.type){
        case 'SET_ITEMS': return action.payload
        default: return state
    }
}

export default combineReducers({ items })