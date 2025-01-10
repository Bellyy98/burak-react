import React from "react";
import "../css/app.css";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import {} from "@mui/icons-material"
import {Link, Route, Switch, } from "react-router-dom"
import { About } from "./screens/About";
import { Users } from "./screens/Users";


function App() {
  return (
    <div>
    <nav>
      <ol>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ol>
    </nav>


    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </div>
  );
}

function Home() {
  return <Container>Home</Container>;
}

export default App;
