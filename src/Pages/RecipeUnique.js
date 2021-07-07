import React from "react";
import UniqueRecipeDetails from "../Components/UniqueRecipeDetails";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import RecipeInstructions from "../Components/RecipeInstructions";
import RecipeRequirements from "../Components/RecipeRequirements";

const RecipeUnique = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route exact path={`${path}`}>
          <UniqueRecipeDetails />;
        </Route>
        <Route path={`${path}/requirements`}>
          <RecipeRequirements />
        </Route>
        <Route path={`${path}/instructions`}>
          <RecipeInstructions />
        </Route>
      </Switch>
    </>
  );
};

export default RecipeUnique;
