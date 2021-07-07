import { dataContext } from "../App";
import React, { useContext } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

const PageBar = () => {
  const data = useContext(dataContext);
  const dispatch = data.pageStates[1];
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const retrieveNumber = (event) => {
    dispatch({ type: "SETPAGE", payload: event.target.value });
  };
  const pageBars = pages.map((element) => {
    return (
      <Button
        vairant="secondary"
        className="pagebar"
        onClick={retrieveNumber}
        value={element}
      >
        {element}
      </Button>
    );
  });
  return (
    <ButtonGroup aria-label="Basic example" size="sm">
      {pageBars}
    </ButtonGroup>
  );
};

export default PageBar;
