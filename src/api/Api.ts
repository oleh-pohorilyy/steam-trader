import axios, { AxiosPromise } from 'axios'
import { DotaSearchQuery } from '../types/DotaSearchQuery';
import { DotaItemParams } from '../types/DotaItemParams';
import { MarketSearchResponse } from '../types/MarketSearchResponse';
import { DotaItemPriceHistogramQuery } from '../types/DotaItemPriceHistogramQuery';
import { DotaItemHistogramParams } from '../types/DotaItemHistogramParams';
import { DotaItemPriceHistogram } from '../types/DotaItemPriceHistogram';

const network = axios.create({
    baseURL: 'https://steamcommunity.com/market'
})

class Api{

    constructor(){}

    _optionsToDotaItemParams(options: DotaSearchQuery): DotaItemParams{
        return {
            query: options.query ?? '',
            search_descriptions: options.withDescription ? 1 : 0,
            'category_570_Hero[]': options.heroes?.join(',') ?? 'any',
            'category_570_Slot[]': options.slot ?? 'any',
            'category_570_Quality[]': options.quality ?? 'any',
            'category_570_Type[]': options.type ?? 'any',
            start: options.start,
            count: options.count,
            sort_column: 'popular',
            sort_dir: 'desc',
            appid: 570
        }
    }

    _optionsToDotaItemHistogramParams(options: DotaItemPriceHistogramQuery): DotaItemHistogramParams{
        return {
            country: options.country ?? 'RU',
            language: options.language ?? 'russian',
            currency: options.currency ?? 5,
            item_nameid: options.item_nameid
        }
    }

    search(options: DotaSearchQuery): AxiosPromise<MarketSearchResponse>{
        const params = this._optionsToDotaItemParams(options)
        return network.get(`/search/render/`, { params })
    }

    getItemPriceHistogram(options: DotaItemPriceHistogramQuery): AxiosPromise<DotaItemPriceHistogram>{
        const params = this._optionsToDotaItemHistogramParams(options)
        return network.get(`/itemordershistogram`, { params })
    }

    getItemPage(itemName: string): AxiosPromise<string> {
        return network.get(`/listings/570/${itemName}`)
    }
}

const client = new Api()

export default client;