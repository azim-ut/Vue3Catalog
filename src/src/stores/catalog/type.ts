export interface CatalogState {
    list: CatalogItem[],
}

export interface CatalogItem {
    id: number,
    title: string,
    link: string,
    images: CatalogItemImage[],
    price: number,
    currency: Currency
}

export interface CatalogItemImage {
    src: string,
    background: string,
    position: string,
    title: string
}

export let defaultCatalogItemImage: CatalogItemImage = {
    src: "",
    background: "#fff",
    position: "center center/cover",
    title: ""
}

export let defaultCatalogItem: CatalogItem = {
    id: 0,
    title: "",
    link: "",
    images: [],
    price: 0,
    currency: Currency.USD
}

export const enum Currency {
    USD = "USD",
    RUB = "RUB",
}