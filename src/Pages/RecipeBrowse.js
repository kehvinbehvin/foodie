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
    <div className="recipe-browse">
      <h1 className="recipe-browse-header">Browse Recipes</h1>
      <br />
      <div className="browse-sidebar">
        <div className="recipe-browse-home">
          <Link to="/" className="browse-home-button">
            Home
          </Link>
        </div>
        <br />
        <div className="recipe-browse-filters">
          <BrowseFilter />
        </div>
      </div>

      <div className="recipe-browse-results">
        <Switch>
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
    </div>
  );
};

export default RecipeBrowse;
