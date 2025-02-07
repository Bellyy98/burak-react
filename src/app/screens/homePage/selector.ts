import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";

const selectHomePage = (state: AppRootState) => state.homePage;

export const retrievPopularDishes = createSelector(
  selectHomePage,
  (HomePage) => HomePage.popularDishes
);

export const retrievNewDishes = createSelector(
    selectHomePage,
    (HomePage) => HomePage.popularDishes
  );

  export const retrievTopUsers = createSelector(
    selectHomePage,
    (HomePage) => HomePage.topUsers
  );
  
  