import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import * as productApi from "../../utils/productApi";
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

export default function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  function inputChange(e) {
    setQuantity(e.target.value);
  }

  function handleAddToCart() {
    console.log("handle add to cart function");
  }

  async function getProducts(showLoading) {
    try {
      showLoading ? setLoading(true) : setLoading(false);
      const data = await productApi.getAll();
      console.log(data);
      console.log(data, "these are all the prods");
      setProducts([data.products]);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      console.log(err, "this is the error from get all Products function");
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  console.log(id, "<--this is id");
  console.log(products, "<--this is product");
  return (
    <>
      {products.map((product) => (
        <Row key={product._id}>
          <Col md={6}>
            <Image src={product.photoUrl} alt={product.name} fluid></Image>
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>{product.name}</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  rating={product.price}
                  numReviews={`${product.description} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>
                <h2>{product.price}</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <h2>{product.description}</h2>
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
                    $<strong>{product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                {product.price > 0 ? (
                  <ListGroup.Item>
                    <Row>
                      <Col>Quantity</Col>
                      <Col>
                        <Form.Control
                          as="select"
                          value={quantity}
                          onChange={inputChange}
                        >
                          {[...Array(product.price).keys()].map((qty) => (
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
                <Button
                  className="btn-block"
                  type="button"
                  disabled={product.price === 0}
                  onClick={handleAddToCart}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      ))}
    </>
  );
}
