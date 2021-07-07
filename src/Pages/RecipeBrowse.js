import React from "react";
import { Link, Route, useRouteMatch, Switch } from "react-router-dom";
import BrowseFilter from "../Components/BrowseFilter";
import Diet from "../Components/Diet";
import Cuisine from "../Components/Cuisine";
import CookingDuration from "../Components/CookingDuration";

const RecipeBrowse = () => {
  let { path } = useRouteMatch();

  return (
    <div>
      <h1>Browse Recipes</h1>
      <br />
      <Link to="/">
        <button>Home</button>
      </Link>

      <BrowseFilter />
      <Switch>
        <Route exact path={`${path}`}>
          <div>Select a filter</div>
        </Route>
        <Route path={`${path}/cuisine`}>
          <Cuisine />
        </Route>
        <Route path={`${path}/diet`}>
          <Diet />
        </Route>
        <Route path={`${path}/cookingDuration`}>
          <CookingDuration />
        </Route>
      </Switch>
    </div>
  );
};

export default RecipeBrowse;
