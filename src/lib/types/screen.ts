import { Member } from "./member";
import { Order } from "./order";
import { Product } from "./product";




/** REACT APP STATE */
export interface AppRootState {
    homePage: HomePageState;
    productsPage: ProductsPageState
    ordersPage: OrdersPageState
}


/** HOME PAGE */
export interface HomePageState {
    popularDishes: Product[]
    newDishes: Product[]
    topUsers: Member[]
}

/** PRODUCT PAGE */
export interface ProductsPageState {
    restaurant: Member | null;
    chosenProduct: Product | null;
    products: Product[];
}


/** ORDER PAGE */
export interface OrdersPageState {
pausedOrders: Order[]
processOrders: Order[]
finishedOrders: Order[]
}