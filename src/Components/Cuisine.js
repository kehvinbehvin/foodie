import React, { useContext, useEffect } from "react";
import { dataContext } from "../App";
import Card from "../Components/Card";
import { useRouteMatch } from "react-router-dom";
import fetcher from "../API/fetcher";
import PageBarBrowsing from "../Components/PageBarBrowsing";
import CardGroup from "react-bootstrap/CardGroup";

const Cuisine = () => {
  const { path } = useRouteMatch();
  const data = useContext(dataContext);
  const filters = data.pageStates[0].browse.filters.cuisine;
  const innerfilter = data.pageStates[0].browse.cuisineInnerFilterChoice;
  const currentPage = data.pageStates[0].browse.cuisinePage;
  const dispatch = data.pageStates[1];
  const retrieveValue = (event) => {
    dispatch({
      type: "SETBROWSECUISINEINNERFILTER",
      payload: event.target.value,
    });
  };
  const filtersJSX = filters.map((element) => {
    return (
      <button value={element} onClick={retrieveValue} key={element}>
        {element}
      </button>
    );
  });
  const dataDisplay = data.pageStates[0].browse.data;
  const dataDisplayJSX =
    Object.keys(dataDisplay).length === 0 ? (
      <div>...</div>
    ) : (
      dataDisplay.results.map((element) => {
        return <Card data={element} path={path} />;
      })
    );
  useEffect(() => {
    const uploadData = async () => {
      const responseData = await fetcher("COMPLEX", {
        cuisine: innerfilter,
        offset: currentPage,
      });
      dispatch({ type: "UPDATEBROSWEDATA", payload: responseData });
    };
    uploadData();
  }, [innerfilter, dispatch, currentPage]);
  return (
    <>
      <div>{filtersJSX}</div>
      <PageBarBrowsing filter={"cuisine"} />
      <CardGroup style={{ justifyContent: "center" }}>
        {dataDisplayJSX}
      </CardGroup>
    </>
  );
};

export default Cuisine;
