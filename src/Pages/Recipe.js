import React from "react";
import Search from "../Components/Recipe/Search";
import fetcher from "../API/FetchData";
import { useRouteMatch, Link, Switch, Route } from "react-router-dom";
import RecipeById from "./RecipeById";
const Context = React.createContext("");

const Recipe = () => {
  let { path, url } = useRouteMatch();
  const inputData = React.useRef("null");
  const [userData, setUserData] = React.useState({
    search: "",
    searchType: 0,
    searchResults: [],
  });

  const submitInput = () => {
    setUserData({
      search: inputData.current.value,
      searchResults: userData.searchResults,
    });
  };

  const luggage = {
    refData: inputData,
    refHandler: submitInput,
    userData: userData,
  };

  React.useEffect(() => {
    fetcher(userData);
  }, [userData]);

  console.log(userData);
  return (
    <Context.Provider value={luggage}>
      <Link to={`${url}/idNumber1`}>Pasta</Link>
      <Link to={`${url}/idNumber2`}>Pizza</Link>
      You are in the Recipe Page
      <Search />
      <Switch>
        <Route exact path={path}></Route>
        <Route path={`${path}/:id`}>
          <RecipeById />
        </Route>
      </Switch>
    </Context.Provider>
  );
};

export { Recipe, Context };
