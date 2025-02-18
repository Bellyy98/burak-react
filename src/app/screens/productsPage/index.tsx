import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { Container } from "@mui/material";
import ChosenProduct from "./ChosenProduct";
import Products from "./Products";
import "../../../css/products.css";
import { CartItem } from "../../../lib/types/search";

interface ProductsPageProps {
  onAdd: (item: CartItem) => void;
}

export default function ProductsPage(props: ProductsPageProps) {
  const { onAdd } = props
  const products = useRouteMatch();
  console.log("location:", products);
  return (
    <div className="products-page">
      <Switch>
        <Route path={`${products.path}/:productId`}>
          <ChosenProduct onAdd={onAdd} />
        </Route>

        <Route path={`${products.path}`}>
          <Products  onAdd={onAdd} />
        </Route>
      </Switch>
    </div>
  );
}
