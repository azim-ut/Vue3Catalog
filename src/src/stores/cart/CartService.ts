import type {CatalogItem} from "@/stores/catalog/type";
import type {Cart, CartItem} from "@/stores/cart/type";
import {defaultCart, defaultCartItem} from "@/stores/cart/type";

export class CartService{

    static CART_STORE = "CART_STORE"

    public static addItem(item: CatalogItem){

    }
    public static deleteItem(item: CatalogItem){

    }
    public static save(cart: Cart){
        let strCartJson = JSON.stringify(cart)
        localStorage.setItem(this.CART_STORE, strCartJson)
    }
    public static restoreCart(): Cart{
        let out = JSON.parse(localStorage.getItem(this.CART_STORE))
        if(out === null){
            return defaultCart
        }
        return out
    }

    public static defineNewCartItem(): CartItem {
        return JSON.parse(JSON.stringify(defaultCartItem));
    }
}