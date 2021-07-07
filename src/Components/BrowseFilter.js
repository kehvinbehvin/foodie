import React, { useContext } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { dataContext } from "../App";

const BrowseFilter = () => {
  const { url } = useRouteMatch();
  const data = useContext(dataContext);
  const filters = data.pageStates[0].browse.filters;
  const filterNames = Object.keys(filters);
  const filterNamesJSX = filterNames.map((element) => {
    return (
      <Link to={url + "/" + element}>
        <div key={element}>{element}</div>
      </Link>
    );
  });
  return <>{filterNamesJSX}</>;
};

export default BrowseFilter;
