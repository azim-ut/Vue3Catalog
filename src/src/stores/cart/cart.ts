import {defineStore} from "pinia";
import type {CartItem, CartState} from "@/stores/cart/type";
import {defaultCart, defaultCartItem} from "@/stores/cart/type";
import {state} from "vue-tsc/out/shared";
import type {CatalogItem} from "@/stores/catalog/type";
import {CartService} from "@/stores/cart/CartService";




export const cartStore = defineStore("cart", {
    state: (): CartState => ({
        cart: defaultCart
    }),
    getters: {
        isShow: (state: CartState):boolean => state.cart.show,
        getItems: (state: CartState):CartItem[] => state.cart.items,
    },
    actions: {
        addToCart(catalogItem: CatalogItem):void {
            let cartItem = this.getItemFromCart(catalogItem);
            if(cartItem.target.id === 0){
                cartItem.target = catalogItem
                cartItem.price = catalogItem.price
                cartItem.currency = catalogItem.currency
                this.$state.cart.items.push(cartItem)
            }
            cartItem.count++
            this.saveCart()
        },
        setCount(catalogItem: CatalogItem, val: number):void {
            let cartItem = this.getItemFromCart(catalogItem);
            if(cartItem.target.id > 0){
                cartItem.count = val
            }
            this.saveCart()
        },
        deleteFromCart(catalogItem: CatalogItem):void {
            let cartItem = this.getItemFromCart(catalogItem);
            const existsItem = this.$state.cart.items.indexOf(cartItem)
            if(existsItem>=0){
                this.$state.cart.items.splice(existsItem, 1)
            }
            this.saveCart()
        },
        getItemFromCart(catalogItem: CatalogItem):CartItem {
            let cartItem = CartService.defineNewCartItem();
            const existsIndex = this.$state.cart.items.findIndex((row: CartItem) => row.target === catalogItem)
            if(existsIndex >= 0){
                cartItem = this.$state.cart.items[existsIndex]
            }
            return cartItem
        },
        toggleShow(): boolean {
            return this.$state.cart.show = !this.$state.cart.show
        },
        restoreCart():void {
            this.$state.cart = CartService.restoreCart()
        },
        saveCart():void {
            CartService.save(this.$state.cart)
        }
    }
})