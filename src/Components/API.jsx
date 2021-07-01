import React, { useEffect, useState } from "react";

const API = () => {
  const [recipeData, setData] = React.useState("");
  const [recipeDetails, setDetails] = React.useState("");

  React.useEffect(() => {
    if (recipeData === undefined) {
      return undefined;
    }
    // fetch(
    //   "https://api.spoonacular.com/recipes/complexSearch?apiKey=bda294c29253473db693d0876f3c443a&query=pasta"
    // )
    //   .then((res) => res.json())
    //   .then((data) => setData(data));
    fetch(
      "https://api.spoonacular.com/recipes/654959/information?apiKey=bda294c29253473db693d0876f3c443a&query=pasta"
    )
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  console.log(recipeDetails);
  return <div>API CALL</div>;
};

export default API;
