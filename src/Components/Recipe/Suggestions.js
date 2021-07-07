import React from "react";
import { useContext } from "react";
import { Context } from "../../Pages/Recipe";
import Card from "./Card";

const Suggestions = () => {
  // const { RecipeData } = useContext(Context);
  // const recipeArray =
  //   RecipeData !== undefined
  //     ? RecipeData.map((element) => {
  //         return <Card data={element} />;
  //       })
  //     : null;
  return (
    <>
      <div>Suggestions Component</div>
      {/* {recipeArray} */}
    </>
  );
};

export default Suggestions;
