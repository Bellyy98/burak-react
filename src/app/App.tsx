import React from "react";
import "../css/app.css";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import {} from "@mui/icons-material"
import {Link, Route, Switch, } from "react-router-dom"
import { HomePage } from "./screens/homePage";
import { ProductsPage } from "./screens/productsPage";
import { OrdersPage } from "./screens/ordersPage";
import { UserPage } from "./screens/userPage";


function App() {
  return (
    <div>
    <nav>
      <ol>
        <li>
          <Link to="/">HomePage</Link>
        </li> 
        <li>
          <Link to="/products">ProductsPage</Link>
          </li>
        <li>
          <Link to="/orders">OrdersPage</Link>
        </li>
        <li>
          <Link to="/member-page">UserPage</Link>
        </li> 
      </ol>
    </nav>


    <Switch>
      <Route path="/products">
        < ProductsPage />
      </Route>
      <Route path="/orders">
        <OrdersPage />
      </Route>
      <Route path="/member-page">
        < UserPage/>
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  </div>
  );
}


export default App;


