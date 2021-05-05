import axios, { AxiosPromise } from 'axios'
import { DotaSearchQuery } from '../types/SearchQuery';
import { SearchResponse } from '../types/SearchResponse';

const network = axios.create({
    baseURL: 'https://steamcommunity.com/market/search/'
})

class Api{

    constructor(){}

    _optionsToItemParams(options: DotaSearchQuery): any{
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

    search(options: DotaSearchQuery): AxiosPromise<SearchResponse>{
        const params = this._optionsToItemParams(options)
        return network.get(`render/`, { params })
    }


}

const client = new Api()

export default client;