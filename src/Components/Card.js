import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const CardComp = (props) => {
  const title = props.data.title;
  const image = props.data.image;
  const id = props.data.id;
  const path = props.path;
  const score = props.data.spoonacularScore;
  const readyTime = props.data.readyInMinutes;
  const pricePerServing = props.data.pricePerServing;
  console.log(props.data);
  return (
    <Card
      border="dark"
      style={{ minWidth: "18rem", maxWidth: "18rem", margin: "10px" }}
    >
      <Card.Img variant="top" src={image} />
      <Card.Header as="h5">{title}</Card.Header>
      <Card.Body>
        <Card.Text>Spoonacular Score: {score} / 100</Card.Text>
        <Card.Text>Cooking Time: {readyTime} mins</Card.Text>
        <Card.Text>Price per serving: {pricePerServing}</Card.Text>
      </Card.Body>
      <Link to={path + "/" + id}>
        <Button variant="primary">View</Button>
      </Link>
    </Card>
  );
};

export default CardComp;
