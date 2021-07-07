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
  const instructionsJSX =
    uniqueRecipeData[3] === undefined ? (
      <div>...</div>
    ) : (
      uniqueRecipeData[3][0].steps.map((element) => {
        return (
          <>
            <h6>{element.number}</h6>
            <p>{element.step}</p>
          </>
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
    <>
      <div>instructions</div>
      <Link to={`${prevURL}`}>
        <Button variant="primary">back to summary</Button>
      </Link>
      {instructionsJSX}
    </>
  );
};

export default RecipeInstructions;
