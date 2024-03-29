

export type NftAttributes = {
    [x: string]: any
    trait_type : string,
    value : string
}

export type NftMeta = {
    description : string,
    image : string,
    name : string,
    attributes : NftAttributes
}