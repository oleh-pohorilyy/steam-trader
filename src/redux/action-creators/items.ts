import { DotaItem } from "src/types";

export default {
    setItemsAC(payload: Array<DotaItem>) {
        return {
            type: 'SET_ITEMS',
            payload
        } as const
    }
}