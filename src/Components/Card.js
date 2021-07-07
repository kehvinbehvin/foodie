import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const CardComp = (props) => {
  const title = props.data.title;
  const image = props.data.image;
  const id = props.data.id;
  const path = props.path;
  return (
    <Card
      border="dark"
      style={{ minWidth: "18rem", maxWidth: "18rem", margin: "10px" }}
    >
      <Card.Img variant="top" src={image} />
      <Card.Header as="h5">{title}</Card.Header>
      <Card.Body>
        <Card.Text>{id}</Card.Text>
      </Card.Body>
      <Link to={path + "/" + id}>
        <Button variant="primary">View</Button>
      </Link>
    </Card>
  );
};

export default CardComp;
