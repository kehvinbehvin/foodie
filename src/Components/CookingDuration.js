import React, { useContext, useEffect } from "react";
import { dataContext } from "../App";
import Card from "../Components/Card";
import { useRouteMatch } from "react-router-dom";
import fetcher from "../API/fetcher";
import PageBarBrowsing from "../Components/PageBarBrowsing";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";

const CookingDuration = () => {
  const { path } = useRouteMatch();
  const data = useContext(dataContext);
  const filters = data.pageStates[0].browse.filters.cookingDuration;
  const innerfilter =
    data.pageStates[0].browse.cookingDurationInnerFilterChoice;
  const currentPage = data.pageStates[0].browse.cookingDurationPage;
  const dispatch = data.pageStates[1];
  const retrieveValue = (event) => {
    dispatch({
      type: "SETBROWSECOOKINGDURATIONINNERFILTER",
      payload: event.target.value,
    });
  };
  const filtersJSX = filters.map((element) => {
    return (
      <Button variant="secondary" value={element} onClick={retrieveValue}>
        {element} mins
      </Button>
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
        cookingDuration: innerfilter,
        offset: currentPage,
      });
      dispatch({ type: "UPDATEBROSWEDATA", payload: responseData });
    };
    uploadData();
  }, [innerfilter, dispatch, currentPage]);

  return (
    <>
      <div>{filtersJSX}</div>
      <PageBarBrowsing filter={"cookingDuration"} />
      <CardGroup style={{ justifyContent: "center" }}>
        {dataDisplayJSX}
      </CardGroup>
    </>
  );
};

export default CookingDuration;
