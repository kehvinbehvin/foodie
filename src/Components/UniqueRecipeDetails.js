import React, { useContext, useEffect } from "react";
import { useParams, useRouteMatch, Link } from "react-router-dom";
import { dataContext } from "../App";
import fetcher from "../API/fetcher";

const UniqueRecipeDetails = () => {
  const { id } = useParams();
  const { url } = useRouteMatch();
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
        return null;
      })
    ) : (
      <div>...</div>
    );

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
  }, [id, dispatch]);
  return (
    <>
      <div>{dataDisplayJSX}</div>
      <Link to={`${url}/requirements`}>
        <button>Requirements</button>
      </Link>
      <Link to={`${url}/instructions`}>
        <button>Instructions</button>
      </Link>
    </>
  );
};

export default UniqueRecipeDetails;
