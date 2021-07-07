import { Link, useRouteMatch } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { dataContext } from "../App";
import fetcher from "../API/fetcher";
import Card from "../Components/Card";
import PageBar from "../Components/pageBar";
import Button from "react-bootstrap/Button";

const RecipeSearchResults = () => {
  console.log("rendering search results");
  const { path } = useRouteMatch();
  const data = useContext(dataContext);
  const userInput = data.pageStates[0].home.userInput;
  const dispatch = data.pageStates[1];
  const pageNumber = data.pageStates[0].searchResults.currentPage;
  const pageDisplayData = data.pageStates[0].searchResults.data;
  console.log(data);
  const pageDisplayDataJSX =
    Object.keys(pageDisplayData).length === 0 ? (
      <div>...</div>
    ) : (
      pageDisplayData.results.map((element) => {
        return <Card data={element} path={path} />;
      })
    );

  useEffect(() => {
    const uploadData = async () => {
      const responseData = await fetcher("COMPLEX", {
        userQuery: userInput,
        offset: pageNumber,
      });
      dispatch({ type: "UPDATESEARCHRESULTS", payload: responseData });
    };
    uploadData();
  }, [userInput, pageNumber, dispatch]);
  return (
    <div>
      <h1>Search results</h1>
      <PageBar />
      <br />
      <Link to="/">
        <Button variant="primary">Home</Button>
      </Link>

      {pageDisplayDataJSX}
    </div>
  );
};
export default RecipeSearchResults;
