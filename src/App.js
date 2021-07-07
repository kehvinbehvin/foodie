import "./App.css";

import { Route } from "react-router";
import Home from "./Pages/Home";
import Navigation from "./Components/Navigation";
import { Recipe } from "./Pages/Recipe";
import Ingredients from "./Pages/Ingredients";
import Products from "./Pages/Products";

function App() {
  return (
    <>
      <div className="App">
        <Navigation />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/recipe">
          <Recipe />
        </Route>
      </div>
    </>
  );
}

export default App;
