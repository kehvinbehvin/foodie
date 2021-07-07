import { dataContext } from "../App";
import React, { useContext } from "react";

const PageBarBrowsing = (props) => {
  const filter = props.filter;
  const data = useContext(dataContext);
  const dispatch = data.pageStates[1];
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const retrieveNumber = (event) => {
    if (filter === "cuisine") {
      dispatch({ type: "SETBROWSECUISINEPAGE", payload: event.target.value });
    } else if (filter === "cookingDuration") {
      dispatch({
        type: "SETBROWSECOOKINGDURATIONPAGE",
        payload: event.target.value,
      });
    } else if (filter === "diet") {
      dispatch({ type: "SETBROWSEDIETPAGE", payload: event.target.value });
    }
    return null;
  };
  const pageBars = pages.map((element) => {
    return (
      <button className="pagebar" onClick={retrieveNumber} value={element}>
        {element}
      </button>
    );
  });
  return <div>{pageBars}</div>;
};

export default PageBarBrowsing;
