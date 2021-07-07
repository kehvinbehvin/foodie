import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="NavBar">
      <Link to="/">Home</Link>
      <Link to="/recipe">Recipe</Link>
    </div>
  );
};

export default Navigation;
