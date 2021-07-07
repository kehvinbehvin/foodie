const fetcher = (userData) => {
  const API_KEY = process.env.REACT_APP_APIKEY2;
  const API_URL = `apiKey=${API_KEY}`;
  const userSearchType = userData.searchType;
  const recipeId = "";
  const complexSearch =
    `https://api.spoonacular.com/recipes/complexSearch?` + API_URL;
  const reciepeStandardURL = `https://api.spoonacular.com/recipes/${recipeId}`;
  const getInformationByRecipe = reciepeStandardURL + API_URL + "information";
  const getTasteWidgetByRecipe = reciepeStandardURL + API_URL + "tasteWidget";
  const getTasteJSONByRecipe =
    reciepeStandardURL + API_URL + "tasteWidget.json";
  const getEquipmentByRecipe = reciepeStandardURL + API_URL + "equipmentWidget";
  const getEquipmentJSONByRecipe =
    reciepeStandardURL + API_URL + "equipmentWidget.json";
  const getPriceBreakdownByRecipe =
    reciepeStandardURL + API_URL + "priceBreakdown=true";
  const URLArray = [
    complexSearch,
    getInformationByRecipe,
    getTasteWidgetByRecipe,
    getTasteJSONByRecipe,
    getEquipmentByRecipe,
    getEquipmentJSONByRecipe,
    getPriceBreakdownByRecipe,
  ];

  fetch(URLArray[userSearchType])
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};

export default fetcher;
