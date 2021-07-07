import React from "react";
import { useContext } from "react";
import { dataContext } from "../App";
import { useRouteMatch, Link } from "react-router-dom";

const RecipeRequirements = () => {
  const data = useContext(dataContext);
  const { url } = useRouteMatch();
  const urlArray = url.split("/");
  urlArray.splice(-1);
  const prevURL = urlArray.join("/");
  const uniqueRecipeData = data.pageStates[0].uniqueRecipe.data;
  const ingredientsArray = uniqueRecipeData[0].extendedIngredients;
  const ingredientsArrayJSX = ingredientsArray.map((element) => {
    return (
      <div>
        {element.name}:{element.amount}
      </div>
    );
  });
  return (
    <>
      <div>Requirements</div>
      {ingredientsArrayJSX}
      <Link to={`${prevURL}`}>
        <button>back to summary</button>
      </Link>
    </>
  );
};

export default RecipeRequirements;
