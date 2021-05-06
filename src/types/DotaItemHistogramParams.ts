import { DotaItemPriceHistogramQuery } from "./DotaItemPriceHistogramQuery";

export type DotaItemHistogramParams = DotaItemPriceHistogramQuery & {
    country: string
    language: string
    currency: number
}