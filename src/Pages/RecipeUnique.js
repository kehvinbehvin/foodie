import React from "react";
import RecipeUniqueDetails from "../Components/UniqueRecipeDetails";
import { Route, Switch, useRouteMatch } from "react-router-dom";

const RecipeUnique = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route exact path={`${path}`}>
          <RecipeUniqueDetails />;
        </Route>
      </Switch>
    </>
  );
};

export default RecipeUnique;
