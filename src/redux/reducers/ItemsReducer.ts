import { combineReducers } from "redux"
import { ActionType, DotaItem } from "src/types"

export const itemsReducer = (state: Array<DotaItem> = [], action: ActionType): Array<DotaItem> => {
    switch(action.type){
        case 'SET_ITEMS': return action.payload
        default: return state
    }
}