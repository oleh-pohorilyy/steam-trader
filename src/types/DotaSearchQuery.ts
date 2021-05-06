export type DotaSearchQuery = {
    query?: string
    heroes?: Array<string>
    slot?: string
    type?: string
    quality?: string
    withDescription?: boolean
    start: number
    count: number
}