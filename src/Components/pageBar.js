import { dataContext } from "../App";
import React, { useContext } from "react";

const PageBar = () => {
  const data = useContext(dataContext);
  const dispatch = data.pageStates[1];

  const retrieveNumber = (event) => {
    dispatch({ type: "SETPAGE", payload: event.target.value });
  };
  const pageBars = data.pageStates[0].searchResults.pagesArray.map(
    (element) => {
      return (
        <button className="pagebar" onClick={retrieveNumber} value={element}>
          {element}
        </button>
      );
    }
  );
  return <div className="pagebar-container">{pageBars}</div>;
};

export default PageBar;
