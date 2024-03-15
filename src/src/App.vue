
<template>
  <header>
    <HeadBlock />
  </header>

  <RouterView />
</template>

<script lang="ts">
import GeneralText from '@data/general_text.json'
import {defineComponent} from "vue";
import type {CatalogItem} from "@/stores/catalog/type";
import {mapStores} from "pinia";
import {catalogStore} from "@/stores/catalog/catalog";
import {cartStore} from "@/stores/cart/cart";
import type {CartItem} from "@/stores/cart/type";
import HeadBlock from "@/components/HeadBlock.vue";

export default defineComponent({
  components: {HeadBlock},
  computed: {
    ...mapStores(catalogStore, cartStore)
  },
  data(){
    return {
      generalText: GeneralText
    }
  },
  methods: {
    getCartItem(): CartItem[]{
      return this.cartStore.getItems
    },
    addToCart(catalogItem: CatalogItem){
      this.cartStore.addToCart(catalogItem)
    },
    deleteFromCart(cartRow: CartItem){
      this.cartStore.deleteFromCart(cartRow.target)
    },
    getCatalogItems():CatalogItem[]{
      return this.catalogStore.getList;
    },
  },
  mounted() {
    this.catalogStore.fetchAllItems()
    this.cartStore.restoreCart()
  },
})
</script>


<style scoped>
</style>
