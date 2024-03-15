import type {CatalogItem} from "@/stores/catalog/type";
import {Currency} from "@/stores/catalog/type";
import {defaultCatalogItem} from "@/stores/catalog/type";

export interface CartItem {
    id: number,
    url: string,
    count: number,
    price: number,
    currency: Currency,
    target: CatalogItem
}

export interface Cart {
    title: string,
    name: string,
    email: string,
    phone: string,
    address: string,
    items: CartItem[],
    show: boolean
}

export interface CartState {
    cart: Cart
}

export let defaultCartItem: CartItem = {
    id: 0,
    url: "",
    count: 0,
    price: 0,
    currency: Currency.USD,
    target: defaultCatalogItem
}

export let defaultCart: Cart = {
    title: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    items: [],
    show: false
}