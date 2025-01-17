import React  from "react";
import ActiveUsers from "./ActiveUsers";
import Advertisement from "./Advertisement";
import Events from "./Events";
import FreshMenu from "./FreshMenu";
import PopularDishes from "./PopularDishes";
import Statistics from "./Statistics";
import "../../../css/home.css"

export default function HomePage() {
    return <div className={"homepage"}>
      <Statistics/>
      <PopularDishes/>
      <FreshMenu/>
      <Advertisement/>
      <ActiveUsers/>
      <Events/>
    </div>;
  }
  