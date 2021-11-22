import React from "react";
import { Card, Col, Container, Image } from "react-bootstrap";
import Rating from "../Rating/Rating";
import { Link } from "react-router-dom";

export default function Product({
  products,
  smallScreen,
  medScreen,
  largeScreen,
}) {
  console.log(products);
  return (
    <>
      {products.map((product) => (
        <Col
          key={product._id}
          sm={smallScreen}
          md={medScreen}
          lg={largeScreen}
          fluid
        >
          <Card className="my-3 p-3">
            <Link to={`/product/${product._id}`}>
              <Image src={product.photoUrl} variant="top" fluid />
            </Link>
            <Link to={`/product/${product._id}`}>
              <Card.Title>
                <Card.Text as="h1">{product.name}</Card.Text>
              </Card.Title>
            </Link>
            <Card.Body>
              <Card.Text as="div">${product.price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
}
