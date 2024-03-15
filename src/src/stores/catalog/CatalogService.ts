import type {CatalogItem} from "@/stores/catalog/type";
import catalogItems from "@data/catalog/catalog.json";

export class CatalogService {

    public static getCatalogItems():CatalogItem[]{
        return catalogItems;
    }
}