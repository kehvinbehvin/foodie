import React from "react";
import { useContext } from "react";
import { dataContext } from "../App";
import { useRouteMatch, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const RecipeRequirements = () => {
  const data = useContext(dataContext);
  const { url } = useRouteMatch();
  const urlArray = url.split("/");
  urlArray.splice(-1);
  const prevURL = urlArray.join("/");
  const uniqueRecipeData = data.pageStates[0].uniqueRecipe.data;
  const ingredientsArray = uniqueRecipeData[0].extendedIngredients;
  console.log(ingredientsArray);
  const ingredientsArrayJSX = ingredientsArray.map((element) => {
    return (
      <div className="ingredient-card">
        <div className="Icard-image-container">
          <img
            src={
              "https://spoonacular.com/cdn/ingredients_100x100/" + element.image
            }
          ></img>
        </div>
        <div className="Icard-title">{element.name}</div>
        <div className="Icard-Amount">{element.amount}</div>
      </div>
    );
  });
  return (
    <div className="recipe-unique-requirements">
      <h1 className="requirements-header">Requirements</h1>
      <div className="ingredient-cards-container">{ingredientsArrayJSX}</div>
      <Link to={`${prevURL}`}>
        <Button variant="primary">back to summary</Button>
      </Link>
    </div>
  );
};

export default RecipeRequirements;
