import React, { useContext } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { dataContext } from "../App";
import Nav from "react-bootstrap/Nav";
const BrowseFilter = () => {
  const { url } = useRouteMatch();
  const data = useContext(dataContext);
  const filters = data.pageStates[0].browse.filters;
  const filterNames = Object.keys(filters);
  const filterNamesJSX = filterNames.map((element) => {
    return (
      <>
        <Link to={url + "/" + element} className="filter-Link">
          {element}
        </Link>
        <br />
      </>
    );
  });
  return (
    <>
      <Nav className="flex-column">{filterNamesJSX}</Nav>
    </>
  );
};

export default BrowseFilter;
