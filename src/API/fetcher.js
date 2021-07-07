const fetcher = async (fetchType, options = {}) => {
  const API_KEY = process.env.REACT_APP_APIKEY4;
  const API_URL = `?apiKey=${API_KEY}`;
  const recipeId = options.recipeId;
  const reciepeStandardURL = `https://api.spoonacular.com/recipes/${recipeId}`;
  let URLSEARCHED = "";
  if (fetchType === "COMPLEX") {
    console.log(options);
    const offset = `&offset=` + options.offset;
    const userQuery =
      options.userQuery === undefined
        ? ""
        : `&query=` + options.userQuery + offset;
    const cuisine =
      options.cuisine === undefined || options.cuisine === ""
        ? ""
        : "&cuisine=" + options.cuisine;
    const diet =
      options.diet === undefined || options.diet === ""
        ? ""
        : "&diet=" + options.diet;
    const readyTime =
      options.cookingDuration === undefined || options.cookingDuration === ""
        ? ""
        : "&maxReadyTime=" + options.cookingDuration;
    const complexSearch =
      `https://api.spoonacular.com/recipes/complexSearch` +
      API_URL +
      userQuery +
      diet +
      readyTime +
      cuisine;
    URLSEARCHED = complexSearch;
  } else if (fetchType === "INFORMATION") {
    const getInformationByRecipe =
      reciepeStandardURL + "/information" + API_URL;
    URLSEARCHED = getInformationByRecipe;
  } else if (fetchType === "TASTEWIDGET") {
    const getTasteWidgetByRecipe =
      reciepeStandardURL + "/tasteWidget" + API_URL;
    URLSEARCHED = getTasteWidgetByRecipe;
  } else if (fetchType === "TASTEJSON") {
    const getTasteJSONByRecipe =
      reciepeStandardURL + "/tasteWidget.json" + API_URL;
    URLSEARCHED = getTasteJSONByRecipe;
  } else if (fetchType === "EQUIPMENTWIDGET") {
    const getEquipmentByRecipe =
      reciepeStandardURL + "/equipmentWidget" + API_URL;
    URLSEARCHED = getEquipmentByRecipe;
  } else if (fetchType === "EQUIPMENTJSON") {
    const getEquipmentJSONByRecipe =
      reciepeStandardURL + "/equipmentWidget.json" + API_URL;
    URLSEARCHED = getEquipmentJSONByRecipe;
  } else if (fetchType === "PRICE") {
    const getPriceBreakdownByRecipe =
      reciepeStandardURL + "/priceBreakdownWidget.json" + API_URL;
    URLSEARCHED = getPriceBreakdownByRecipe;
  }
  console.log(URLSEARCHED);
  const response = await fetch(URLSEARCHED);
  const data = await response.json();
  return data;
};

export default fetcher;
