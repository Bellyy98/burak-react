import { Member } from "./member";
import { Product } from "./product";




/** REACT APP STATE */
export interface AppRootState {
    homePage: HomePageState;
    productsPage: ProdctsPageState
}


/** HOME PAGE */
export interface HomePageState {
    popularDishes: Product[]
    newDishes: Product[]
    topUsers: Member[]
}

/** PRODUCT PAGE */
export interface ProdctsPageState {
    restaurant: Member | null;
    chosenProduct: Product | null;
    products: Product[];
}


/** ORDER PAGE */