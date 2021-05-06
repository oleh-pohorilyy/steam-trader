import { DotaItem } from "../../types/DotaItem";

export default {
    setItemsAC(payload: Array<DotaItem>) {
        return {
            type: 'SET_ITEMS',
            payload
        } as const
    }
}