import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { dataContext } from "../App";
import Button from "react-bootstrap/Button";

const RecipeMain = () => {
  const data = useContext(dataContext);
  const userRef = useRef("");
  const dispatch = data.pageStates[1];
  const updateUserInputConstantly = () => {
    dispatch({ type: "UPDATEUSERSEARCHINPUT", payload: userRef.current.value });
  };
  return (
    <div className="recipe-main">
      <h1 className="recipe-main-header">Foodie</h1>
      <br />
      <div className="recipe-main-input">
        <input
          placeholder="Recipe Keyword"
          ref={userRef}
          onChange={updateUserInputConstantly}
        ></input>
      </div>
      <div className="recipe-main-buttons">
        <Link to="/browse">
          <Button variant="primary">Browse</Button>
        </Link>{" "}
        <Link to="/searchResults">
          <Button variant="primary">Search</Button>
        </Link>
      </div>
    </div>
  );
};

export default RecipeMain;
