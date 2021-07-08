import { dataContext } from "../App";
import React, { useContext } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

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
      <>
        <Button
          variant="primary"
          className="pagebar"
          onClick={retrieveNumber}
          value={element}
        >
          {element}
        </Button>
      </>
    );
  });
  return (
    <ButtonGroup aria-label="Basic example" size="sm">
      {pageBars}
    </ButtonGroup>
  );
};

export default PageBarBrowsing;
