import React from "react";

const API = () => {
  const [recipeDetails, setDetails] = React.useState("");
  const condition = React.useRef(true);

  React.useEffect(() => {
    console.log(condition.current);
    if (recipeDetails === undefined) {
      return undefined;
    } else if (condition.current) {
      const API_KEY = process.env.REACT_APP_APIKEY2;
      fetch(
        `https://api.spoonacular.com/recipes/654959/information?apiKey=${API_KEY}&query=pasta`
      )
        .then((res) => res.json())
        .then((data) => {
          condition.current = false;
          return setDetails(data);
        });
    } else {
      return null;
    }
  });

  console.log(recipeDetails);
  return <div>API CALL</div>;
};

export default API;
