import React from "react";
import { useContext, useEffect } from "react";
import { dataContext } from "../App";
import fetcher from "../API/fetcher";
import { useRouteMatch, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const RecipeInstructions = () => {
  const data = useContext(dataContext);
  const dispatch = data.pageStates[1];
  const { url } = useRouteMatch();
  const urlArray = url.split("/");
  urlArray.splice(-1);
  const prevURL = urlArray.join("/");
  const recipeId = data.pageStates[0].uniqueRecipe.recipeId;
  const uniqueRecipeData = data.pageStates[0].uniqueRecipe.data;
  console.log(uniqueRecipeData);
  const instructionsJSX =
    uniqueRecipeData[3] === undefined ? (
      <div>...</div>
    ) : (
      uniqueRecipeData[3][0].steps.map((element) => {
        return (
          <div className="step-card-container">
            <div className="step-card-container-left">
              <h6 className="step-card-header">Step: {element.number}</h6>
              <p className="step-card-explanation">{element.step}</p>
            </div>
            <div className="step-card-container-right">
              {element.equipment.length === 0 ? (
                <strong>Equipments</strong>
              ) : (
                <div className="step-card-equipment-side">
                  <div className="step-card-equipment-header">
                    <strong>Equipments</strong>
                  </div>
                  <div className="step-card-equipment-container">
                    {element.equipment.map((equipment) => {
                      return (
                        <div div className="mini-card">
                          <p className="step-card-equipment-name">
                            {equipment.name}
                          </p>
                          <div className="mini-image-container">
                            <img
                              className="step-card-equipment-image"
                              src={
                                "https://spoonacular.com/cdn/equipment_100x100/" +
                                equipment.image
                              }
                            ></img>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              {element.ingredients.length === 0 ? (
                <strong>Equipments</strong>
              ) : (
                <div className="step-card-ingredient-side">
                  <strong className="step-card-ingredients-header">
                    Ingredients
                  </strong>
                  <div className="step-card-ingredients-container">
                    {element.ingredients.map((ingredients) => {
                      return (
                        <div className="mini-card">
                          <p className="step-card-equipment-name">
                            {ingredients.name}
                          </p>
                          <div className="mini-image-container">
                            <img
                              className="step-card-equipment-image"
                              src={
                                "https://spoonacular.com/cdn/ingredients_100x100/" +
                                ingredients.image
                              }
                            ></img>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })
    );
  useEffect(() => {
    const uploadData = async () => {
      const responseDataPrice = await fetcher("INSTRUCTIONS", {
        recipeId: recipeId,
      });
      dispatch({
        type: "APPENDDATATOUNIQUEPAGE",
        payload: responseDataPrice,
      });
    };
    uploadData();
  }, [recipeId, dispatch]);
  return (
    <div className="recipe-unique-instructions">
      <h1>Instructions</h1>
      <Link to={`${prevURL}`}>
        <Button variant="primary">back to summary</Button>
      </Link>
      <div className="recipe-unique-instructions-container">
        {instructionsJSX}
      </div>
    </div>
  );
};

export default RecipeInstructions;
