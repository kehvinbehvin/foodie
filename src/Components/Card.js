import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const title = props.data.title;
  const image = props.data.image;
  const id = props.data.id;
  const path = props.path;
  return (
    <div>
      <Link to={path + "/" + id}>
        <img src={image} alt={`${title}`} />
        <div>{title}</div>
        <div>{id}</div>
      </Link>
    </div>
  );
};

export default Card;
