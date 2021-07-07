import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { dataContext } from "../App";
import fetcher from "../API/fetcher";

const UniqueRecipeDetails = () => {
  const { id } = useParams();
  const data = useContext(dataContext);
  const dispatch = data.pageStates[1];
  const dataDisplay = data.pageStates[0].uniqueRecipe;

  const dataDisplayJSX =
    dataDisplay.data.length === 3 ? (
      dataDisplay.data.map((element, index) => {
        if (index === 0) {
          return <div>vegan: {String(element.vegan)}</div>;
        } else if (index === 1) {
          return <div>sweetness: {element.sweetness}</div>;
        } else if (index === 2) {
          return <div>price: {element.totalCost}</div>;
        }
      })
    ) : (
      <div>...</div>
    );
  console.log(dataDisplayJSX);
  useEffect(() => {
    const uploadData = async () => {
      dispatch({ type: "UPDATERECIPEID", payload: id });
      const responseDataInformation = await fetcher("INFORMATION", {
        recipeId: id,
      });
      dispatch({
        type: "UPDATEUNIQUERESULTSDATA",
        payload: responseDataInformation,
      });
      const responseDataTaste = await fetcher("TASTEJSON", { recipeId: id });
      dispatch({ type: "APPENDDATATOUNIQUEPAGE", payload: responseDataTaste });
      const responseDataPrice = await fetcher("PRICE", { recipeId: id });
      dispatch({ type: "APPENDDATATOUNIQUEPAGE", payload: responseDataPrice });
    };
    uploadData();
  }, [id]);
  return <div>{dataDisplayJSX}</div>;
};

export default UniqueRecipeDetails;
