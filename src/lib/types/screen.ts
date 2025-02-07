import { Member } from "./member";
import { Product } from "./product";




/** REACT APP STATE */
export interface AppRootState {
    homePage: HomePageState;
}


/** HOME PAGE */
export interface HomePageState {
    popularDishes: Product[]
    freshMenu: Product[]
    activeUsers: Member[]
}

/** PRODUCT PAGE */



/** ORDER PAGE */