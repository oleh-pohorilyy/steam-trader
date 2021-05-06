import { DotaSearchQuery } from "../../types/DotaSearchQuery"
import { ThunkType } from "../../types/redux/ThunkType"
import actions from '../actions/Items'
import api from '../../api/Api'
import { DotaItem } from "../../types/DotaItem"
import { DotaItemPriceHistogramQuery } from "../../types/DotaItemPriceHistogramQuery"

export const searchItems = (options: DotaSearchQuery): ThunkType => async (dispatch) => {
    const { data } = await api.search(options)
    const parser = new DOMParser()
    const doc = parser.parseFromString(data.results_html, 'text/html')
    
    const items: Array<DotaItem> = Array.from(doc.querySelectorAll('.market_listing_row_link'))
        .map(e => {
            const img = e.querySelector('.market_listing_item_img')?.getAttribute('src') || 'unknown'
            const url = e.getAttribute('href') || 'unknown'
            const name = e.querySelector('.market_listing_item_name')?.textContent || 'unknown'
            const stringCost = e.querySelector('.normal_price .normal_price')?.textContent?.match(/\d+[,.]\d+/)?.shift()
            console.log(e.querySelector('.normal_price .normal_price')?.textContent)
            const cost = parseFloat(stringCost ?? '0')
            console.log(stringCost, cost)
            
            return { cost, name, img, url }
        })

    dispatch(actions.setItemsAC(items))
}

export const getItemId = (itemName: string): ThunkType => async () => {
    const { data } = await api.getItemPage(itemName)
    const stringId = data
        .match(/Market_LoadOrderSpread\(\s?\d+\s?\)/)
        ?.shift()
        ?.match(/\d+/)
        ?.shift()
    return parseInt(stringId ?? '-1')
}

export const getItemPriceHistogram = (options: DotaItemPriceHistogramQuery): ThunkType => async () => {
    return (await api.getItemPriceHistogram(options)).data
}