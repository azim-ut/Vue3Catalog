import {defineStore} from "pinia";
import type {CatalogItem, CatalogState} from "@/stores/catalog/type";
import {CatalogService} from "@/stores/catalog/CatalogService";

export const catalogStore = defineStore("catalog", {
    state: (): CatalogState => ({
        list: []
    }),
    getters: {
        getList: (state: CatalogState): CatalogItem[] => state.list
    },
    actions: {
        fetchAllItems(): void {
            this.$state.list = CatalogService.getCatalogItems()
        }
    }
})