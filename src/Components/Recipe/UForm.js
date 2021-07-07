import React from "react";
import { useContext } from "react";
import { Context } from "../../Pages/Recipe";

const UForm = () => {
  const { refHandler, refData } = useContext(Context);
  return (
    <>
      <input placeholder="Search Recipe" ref={refData}></input>
      <button onClick={refHandler}>Search</button>
    </>
  );
};

export default UForm;
