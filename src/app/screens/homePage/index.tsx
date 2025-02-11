import React, { useEffect, useState } from "react";
import ActiveUsers from "./ActiveUsers";
import Advertisement from "./Advertisement";
import Events from "./Events";
import FreshMenu from "./FreshMenu";
import PopularDishes from "./PopularDishes";
import Statistics from "./Statistics";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setNewDishes, setPopularDishes } from "./slice";
import { Product } from "../../../lib/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";
import "../../../css/home.css";

/** REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
  setNewDishes: (data: Product[]) => dispatch(setNewDishes(data)),
});

export default function HomePage() {
  const { setPopularDishes, setNewDishes } = actionDispatch(useDispatch());
  // SELECT: Store => Data

  console.log(process.env.REACT_APP_API_URL);

  useEffect(() => {
    // Backend server data fetch => Data
    const product = new ProductService();
    product
      .getProducts({
        page: 1,
        limit: 4,
        order: "productViews",
        productCollection: ProductCollection.DISH,
      })
      .then((data) => {
        setPopularDishes(data);
      })
      .catch((err) => console.log(err));


      product
      .getProducts({
        page: 1,
        limit: 4,
        order: "createdAt",
        // productCollection: ProductCollection.DISH,
      })
      .then((data) => {
        setNewDishes(data)
      })
      .catch((err) => console.log(err));

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
