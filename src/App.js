import { Route, Switch } from "react-router-dom";
import "./App.css";
import RecipeMain from "./Pages/RecipeMain";
import RecipeBrowse from "./Pages/RecipeBrowse";
import RecipeSearchResults from "./Pages/RecipeSearchResults";
import RecipeUnique from "./Pages/RecipeUnique";
import { createContext, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const dataContext = createContext();

const stateReducer = (states, action) => {
  switch (action.type) {
    case "HOME":
      return {
        ...states,
        home: {
          data: states.home.data,
          userInput: states.home.userInput,
        },
      };
    case "UPDATEUSERSEARCHINPUT":
      return {
        ...states,
        home: {
          data: states.home.data,
          userInput: action.payload,
        },
      };
    case "UPDATESEARCHRESULTS":
      return {
        ...states,
        searchResults: {
          mounted: states.searchResults.mounted,
          data: action.payload,
          pagesArray: states.searchResults.pagesArray,
          currentPage: states.searchResults.currentPage,
        },
      };
    case "UPDATERECIPEID":
      return {
        ...states,
        uniqueRecipe: {
          mounted: states.uniqueRecipe.mounted,
          data: [...states.uniqueRecipe.data],
          recipeId: action.payload,
        },
      };
    case "UPDATEUNIQUERESULTSDATA":
      return {
        ...states,
        uniqueRecipe: {
          mounted: states.uniqueRecipe.mounted,
          data: [action.payload],
          recipeId: states.uniqueRecipe.recipeId,
        },
      };
    case "APPENDDATATOUNIQUEPAGE":
      return {
        ...states,
        uniqueRecipe: {
          mounted: states.uniqueRecipe.mounted,
          data: [...states.uniqueRecipe.data, action.payload],
          recipeId: states.uniqueRecipe.recipeId,
        },
      };
    case "SETPAGE":
      return {
        ...states,
        searchResults: {
          mounted: states.searchResults.mounted,
          data: states.searchResults.data,
          pagesArray: states.searchResults.pagesArray,
          currentPage: action.payload,
        },
      };
    case "SETBROWSECUISINEINNERFILTER":
      return {
        ...states,
        browse: {
          mounted: states.browse.mounted,
          data: states.browse.data,
          filters: {
            cuisine: ["italian", "chinese", "french", "mexican", "vietnamese"],
            diet: ["gluten", "ketogenic", "vegetarian", "vegan", "paleo"],
            cookingDuration: ["10", "20", "30", "40", "50", "60"],
          },
          cuisineInnerFilterChoice: action.payload,
          dietInnerFilterChoice: "",
          cookingDurationInnerFilterChoice: "",
          cuisinePage: states.browse.cuisinePage,
          dietPage: states.browse.dietPage,
          cookingDurationPage: states.browse.cookingDurationPage,
        },
      };
    case "SETBROWSEDIETINNERFILTER":
      return {
        ...states,
        browse: {
          mounted: states.browse.mounted,
          data: states.browse.data,
          filters: {
            cuisine: ["italian", "chinese", "french", "mexican", "vietnamese"],
            diet: ["gluten", "ketogenic", "vegetarian", "vegan", "paleo"],
            cookingDuration: ["10", "20", "30", "40", "50", "60"],
          },
          cuisineInnerFilterChoice: "",
          dietInnerFilterChoice: action.payload,
          cookingDurationInnerFilterChoice: "",
          cuisinePage: states.browse.cuisinePage,
          dietPage: states.browse.dietPage,
          cookingDurationPage: states.browse.cookingDurationPage,
        },
      };
    case "SETBROWSECOOKINGDURATIONINNERFILTER":
      return {
        ...states,
        browse: {
          mounted: states.browse.mounted,
          data: states.browse.data,
          filters: {
            cuisine: ["italian", "chinese", "french", "mexican", "vietnamese"],
            diet: ["gluten", "ketogenic", "vegetarian", "vegan", "paleo"],
            cookingDuration: ["10", "20", "30", "40", "50", "60"],
          },
          cuisineInnerFilterChoice: "",
          dietInnerFilterChoice: "",
          cookingDurationInnerFilterChoice: action.payload,
          cuisinePage: states.browse.cuisinePage,
          dietPage: states.browse.dietPage,
          cookingDurationPage: states.browse.cookingDurationPage,
        },
      };
    case "SETBROWSEDIETPAGE":
      return {
        ...states,
        browse: {
          mounted: states.browse.mounted,
          data: states.browse.data,
          filters: {
            cuisine: ["italian", "chinese", "french", "mexican", "vietnamese"],
            diet: ["gluten", "ketogenic", "vegetarian", "vegan", "paleo"],
            cookingDuration: ["10", "20", "30", "40", "50", "60"],
          },
          cuisineInnerFilterChoice: states.browse.cuisineInnerFilterChoice,
          dietInnerFilterChoice: states.browse.dietInnerFilterChoice,
          cookingDurationInnerFilterChoice:
            states.browse.cookingDurationInnerFilterChoice,
          cuisinePage: states.browse.cuisinePage,
          dietPage: action.payload,
          cookingDurationPage: states.browse.cookingDurationPage,
        },
      };
    case "SETBROWSECUISINEPAGE":
      return {
        ...states,
        browse: {
          mounted: states.browse.mounted,
          data: states.browse.data,
          filters: {
            cuisine: ["italian", "chinese", "french", "mexican", "vietnamese"],
            diet: ["gluten", "ketogenic", "vegetarian", "vegan", "paleo"],
            cookingDuration: ["10", "20", "30", "40", "50", "60"],
          },
          cuisineInnerFilterChoice: states.browse.cuisineInnerFilterChoice,
          dietInnerFilterChoice: states.browse.dietInnerFilterChoice,
          cookingDurationInnerFilterChoice:
            states.browse.cookingDurationInnerFilterChoice,
          cuisinePage: action.payload,
          dietPage: states.browse.dietPage,
          cookingDurationPage: states.browse.cookingDurationPage,
        },
      };
    case "SETBROWSECOOKINGDURATIONPAGE":
      return {
        ...states,
        browse: {
          mounted: states.browse.mounted,
          data: states.browse.data,
          filters: {
            cuisine: ["italian", "chinese", "french", "mexican", "vietnamese"],
            diet: ["gluten", "ketogenic", "vegetarian", "vegan", "paleo"],
            cookingDuration: ["10", "20", "30", "40", "50", "60"],
          },
          cuisineInnerFilterChoice: states.browse.cuisineInnerFilterChoice,
          dietInnerFilterChoice: states.browse.dietInnerFilterChoice,
          cookingDurationInnerFilterChoice:
            states.browse.cookingDurationInnerFilterChoice,
          cuisinePage: states.browse.cuisinePage,
          dietPage: states.browse.dietPage,
          cookingDurationPage: action.payload,
        },
      };
    case "UPDATEBROSWEDATA":
      return {
        ...states,
        browse: {
          mounted: states.browse.mounted,
          data: action.payload,
          filters: {
            cuisine: ["italian", "chinese", "french", "mexican", "vietnamese"],
            diet: ["gluten", "ketogenic", "vegetarian", "vegan", "paleo"],
            cookingDuration: ["10", "20", "30", "40", "50", "60"],
          },
          cuisineInnerFilterChoice: states.browse.cuisineInnerFilterChoice,
          dietInnerFilterChoice: states.browse.dietInnerFilterChoice,
          cookingDurationInnerFilterChoice:
            states.browse.cookingDurationInnerFilterChoice,
          cuisinePage: states.browse.cuisinePage,
          dietPage: states.browse.dietPage,
          cookingDurationPage: states.browse.cookingDurationPage,
        },
      };
    default:
      return "Error";
  }
};

function App() {
  const [states, dispatch] = useReducer(stateReducer, {
    home: {
      data: {},
      userInput: "",
    },
    searchResults: {
      mounted: false,
      data: {},
      pagesArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      currentPage: "1",
    },
    browse: {
      mounted: false,
      data: {},
      filters: {
        cuisine: ["italian", "chinese", "french", "mexican", "vietnamese"],
        diet: ["gluten", "ketogenic", "vegetarian", "vegan", "paleo"],
        cookingDuration: ["10", "20", "30", "40", "50"],
      },
      cuisineInnerFilterChoice: "",
      cuisinePage: "1",
      dietInnerFilterChoice: "",
      dietPage: "1",
      cookingDurationInnerFilterChoice: "",
      cookingDurationPage: "1",
    },
    uniqueRecipe: {
      mounted: false,
      data: [],
      recipeId: 9999999999,
    },
  });
  const data = {
    pageStates: [states, dispatch],
  };

  return (
    <dataContext.Provider value={data}>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <RecipeMain />
          </Route>
          <Route path="/browse">
            <RecipeBrowse />
          </Route>
          <Route path="/Searchresults/:id">
            <RecipeUnique />
          </Route>
          <Route path="/Searchresults">
            <RecipeSearchResults />
          </Route>
        </Switch>
      </div>
    </dataContext.Provider>
  );
}

export { App, dataContext };
