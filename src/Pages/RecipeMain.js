import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { dataContext } from "../App";

const RecipeMain = () => {
  const data = useContext(dataContext);
  const userRef = useRef("");
  const dispatch = data.pageStates[1];
  const updateUserInputConstantly = () => {
    dispatch({ type: "UPDATEUSERSEARCHINPUT", payload: userRef.current.value });
  };
  return (
    <div>
      <h1>RecipeMain</h1>
      <br />
      <input
        placeholder="Recipe Keyword"
        ref={userRef}
        onChange={updateUserInputConstantly}
      ></input>
      <div>
        <Link to="/browse">
          <button>Browse</button>
        </Link>
        <Link to="/searchResults">
          <button>Search</button>
        </Link>
      </div>
    </div>
  );
};

export default RecipeMain;
