import React, { useContext, useEffect } from "react";
import { dataContext } from "../App";
import { useRouteMatch } from "react-router-dom";
import Card from "../Components/Card";
import fetcher from "../API/fetcher";

const Diet = () => {
  const { path } = useRouteMatch();
  const data = useContext(dataContext);
  const filters = data.pageStates[0].browse.filters.diet;
  const innerfilter = data.pageStates[0].browse.dietInnerFilterChoice;
  const dispatch = data.pageStates[1];
  const retrieveValue = (event) => {
    dispatch({ type: "SETBROWSEDIETINNERFILTER", payload: event.target.value });
  };

  const filtersJSX = filters.map((element) => {
    return (
      <button value={element} onClick={retrieveValue}>
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
  console.log(data.pageStates[0]);
  useEffect(() => {
    const uploadData = async () => {
      console.log(innerfilter);
      const responseData = await fetcher("COMPLEX", {
        diet: innerfilter,
      });
      dispatch({ type: "UPDATEBROSWEDATA", payload: responseData });
    };
    uploadData();
  }, [innerfilter, dispatch]);
  return (
    <>
      <div>{filtersJSX}</div>
      {dataDisplayJSX}
    </>
  );
};

export default Diet;
