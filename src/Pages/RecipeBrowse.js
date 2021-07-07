import React from "react";
import { Link, Route, useRouteMatch, Switch } from "react-router-dom";
import BrowseFilter from "../Components/BrowseFilter";
import Diet from "../Components/Diet";
import Cuisine from "../Components/Cuisine";
import CookingDuration from "../Components/CookingDuration";
import RecipeUnique from "../Pages/RecipeUnique";
import RecipeInstructions from "../Components/RecipeInstructions";
import RecipeRequirements from "../Components/RecipeRequirements";
import Button from "react-bootstrap/Button";

const RecipeBrowse = () => {
  let { path } = useRouteMatch();

  return (
    <div>
      <h1>Browse Recipes</h1>
      <br />
      <Link to="/">
        <Button variant="primary">Home</Button>
      </Link>
      <br />
      <BrowseFilter />
      <Switch>
        <Route exact path={`${path}`}>
          <div>Select a filter</div>
        </Route>
        <Route path={`${path}/cuisine/:id/requirements`}>
          <RecipeRequirements />
        </Route>
        <Route path={`${path}/cuisine/:id/instructions`}>
          <RecipeInstructions />
        </Route>
        <Route path={`${path}/cuisine/:id`}>
          <RecipeUnique />
        </Route>
        <Route path={`${path}/cuisine`}>
          <Cuisine />
        </Route>

        <Route path={`${path}/diet/:id/requirements`}>
          <RecipeRequirements />
        </Route>
        <Route path={`${path}/diet/:id/instructions`}>
          <RecipeInstructions />
        </Route>
        <Route path={`${path}/diet/:id`}>
          <RecipeUnique />
        </Route>
        <Route path={`${path}/diet`}>
          <Diet />
        </Route>

        <Route path={`${path}/cookingDuration/:id/requirements`}>
          <RecipeRequirements />
        </Route>
        <Route path={`${path}/cookingDuration/:id/instructions`}>
          <RecipeInstructions />
        </Route>
        <Route path={`${path}/cookingDuration/:id`}>
          <RecipeUnique />
        </Route>
        <Route path={`${path}/cookingDuration`}>
          <CookingDuration />
        </Route>
      </Switch>
    </div>
  );
};

export default RecipeBrowse;
