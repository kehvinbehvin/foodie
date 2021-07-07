import React from "react";
import { Link, Route, useRouteMatch, Switch } from "react-router-dom";
import BrowseFilter from "../Components/BrowseFilter";
import Diet from "../Components/Diet";
import Cuisine from "../Components/Cuisine";
import CookingDuration from "../Components/CookingDuration";
import RecipeUnique from "../Pages/RecipeUnique";
import RecipeInstructions from "../Components/RecipeInstructions";
import RecipeRequirements from "../Components/RecipeRequirements";

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

        <Route exact path={`${path}/cuisine`}>
          <Cuisine />
        </Route>
        <Route exact path={`${path}/cuisine/:id`}>
          <RecipeUnique />
        </Route>
        <Route exact path={`${path}/cuisine/:id/requirements`}>
          <RecipeRequirements />
        </Route>
        <Route exact path={`${path}/cuisine/:id/instructions`}>
          <RecipeInstructions />
        </Route>

        <Route exact path={`${path}/diet`}>
          <Diet />
        </Route>
        <Route exact path={`${path}/diet/:id`}>
          <RecipeUnique />
        </Route>
        <Route exact path={`${path}/diet/:id/requirements`}>
          <RecipeRequirements />
        </Route>
        <Route exact path={`${path}/diet/:id/instructions`}>
          <RecipeInstructions />
        </Route>

        <Route exact path={`${path}/cookingDuration`}>
          <CookingDuration />
        </Route>
        <Route exact path={`${path}/cookingDuration/:id`}>
          <RecipeUnique />
        </Route>
        <Route exact path={`${path}/cookingDuration/:id/requirements`}>
          <RecipeRequirements />
        </Route>
        <Route exact path={`${path}/cookingDuration/:id/instructions`}>
          <RecipeInstructions />
        </Route>
      </Switch>
    </div>
  );
};

export default RecipeBrowse;
