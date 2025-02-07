import React, { useEffect } from "react";
import ActiveUsers from "./ActiveUsers";
import Advertisement from "./Advertisement";
import Events from "./Events";
import FreshMenu from "./FreshMenu";
import PopularDishes from "./PopularDishes";
import Statistics from "./Statistics";
import "../../../css/home.css";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setPopularDishes } from "./slice";
import { retrievPopularDishes } from "./selector";
import { Product } from "../../../lib/types/product";

/** REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
});

const popularDishesRetriever = createSelector(
  retrievPopularDishes,
  (popularDishes) => ({ popularDishes })
);

export default function HomePage() {
  const { setPopularDishes } = actionDispatch(useDispatch());
  const {popularDishes} = useSelector(popularDishesRetriever)
  // SELECT: Store => Data

  useEffect(() => {
    // Backend server data request => Data
    
    // Slice Data => Store
    //@ts-ignore
   
  }, []);

  
  return (
    <div className={"homepage"}>
      <Statistics />
      <PopularDishes />
      <FreshMenu />
      <Advertisement />
      <ActiveUsers />
      <Events />
    </div>
  );
}
