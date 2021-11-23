import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Col, Image, Button, Row, ListGroup, Form } from "react-bootstrap";
import Rating from "../../components/Rating/Rating";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { useNavigate } from "react-router-dom";


export default function ProductDetail({ products, error, loading, isAdmin, deleteProd }) {
  const { id } = useParams();
  console.log(id)
  const [currentProduct, setCurrentProduct] = useState({});
  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    if (!currentProduct._id || currentProduct._id !== id) {
      const exists = products.find((prod) => prod._id === id);
      exists && setCurrentProduct(exists);
    }
  }, [id, currentProduct, products]);
  function inputChange(e) {
    setQuantity(e.target.value);
  }

  function handleAddToCart() {
    console.log("handle add to cart function");
  }

  function clickHandler(){
    deleteProd()
    // navigate("/");

  }
  console.log(id, "<--this is id");
  console.log(products, "<--this is product");
  console.log(currentProduct, "<--this is current product");
  if (error) {
    return <ErrorMessage error={error} />;
  }

  if (loading || Object.keys(currentProduct).length === 0) {
    return <Loader />;
  }
  const product = currentProduct;
  return (
    <>
      {/* {products.map((product) => ( */}
      <Row style={{marginTop: '5rem'}} key={product._id}>
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
                <Col>Name:</Col>
                <Col>
                  <strong>{product.name}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Price:</Col>
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
            <ListGroup.Item>
            {isAdmin && (
                <Button
                  className="btn-block"
                  type="button"
                  disabled={product.price === 0}
                  onClick={clickHandler}
                >
                  Delete
                </Button>
              )}
            </ListGroup.Item>

          </ListGroup>
        </Col>
      </Row>
      {/* ))} */}
    </>
  );
}
