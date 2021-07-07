import React from "react";
import { Recipe } from "./Recipe";
import { useParams } from "react-router-dom";

const RecipeById = () => {
  const { id } = useParams();
  return <div>You are looking at an individual recipe, {id}</div>;
};

export default RecipeById;
