import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Col,
  Image,
  Card,
  Button,
  Row,
  ListGroup,
  Form,
} from "react-bootstrap";
import Rating from "../../components/Rating/Rating";
import { List } from "semantic-ui-react";

export default function ProductDetail({ match }) {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(0);
  function inputChange(e) {
    setQuantity(e.target.value);
  }

  function handleAddToCart(){
      console.log('handle add to cart function')
  }
  let products = [
    {
      _id: 1,
      name: ["Bob"],
      inventory: 3,
      gender: "male",
      interests: ["music", "skiing"],
    },
    {
      _id: 2,
      name: ["Bo"],
      inventory: 2,
      gender: "male",
      interests: ["musi"],
    },
    {
      _id: 3,
      name: ["ob"],
      inventory: 4,
      gender: "male",
      interests: ["music", "skiing"],
    },
    {
      _id: 4,
      name: ["B"],
      inventory: 0.5,
      gender: "male",
      interests: ["music", "skiing"],
    },
  ];

  const product = products.find((p) => p._id == id);
  console.log(id, "<--this is id");
  console.log(product, "<--this is product");
  return (
    <>
      <div>{product.name}</div>
      <Row>
        <Col md={6}>
          <Image src={product.name} alt={product.name} fluid></Image>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>{product.name}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                rating={product.rating}
                numReviews={`${product.interests} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>{product.inventory}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>{product.interests}</h2>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col>Price:</Col>
                <Col>
                  <strong>{product.name}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Quantity:</Col>
                <Col>
                  $<strong>{product.inventory}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              {product.inventory > 0 ? (
                <ListGroup.Item>
                  <Row>
                    <Col>Quantity</Col>
                    <Col>
                      <Form.Control
                        as="select"
                        value={quantity}
                        onChange={inputChange}
                      >
                        {[...Array(product.inventory).keys()].map((qty) => (
                          <option key={qty + 1} value={qty + 1}>
                            {qty + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ) : null}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button className="btn-block" type="button" disabled={product.inventory === 0} onClick={handleAddToCart}>
                Add To Cart
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
}
