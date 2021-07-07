import React from "react";

const Card = (props) => {
  const title = props.data.title;
  const image = props.data.image;
  const id = props.data.id;

  return (
    <div>
      <img src={image} />
      <div>{title}</div>
      <div>{id}</div>
    </div>
  );
};

export default Card;
