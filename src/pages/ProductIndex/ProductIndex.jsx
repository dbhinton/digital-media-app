import React, { useState, useEffect } from "react";
import { Col, Row, Container, Card } from "react-bootstrap";
import Product from "../../components/Product/Product";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

export default function ProductIndex({getProducts}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");



  if (error) {
    return <ErrorMessage error={error} />;
  }

  if (loading) {
    return <Loader />;
  }
  console.log(products, "products console.log");
  return (
    <Container className="text-center py">
      <h1>All Products</h1>
      <Row>
        <Product smallScreen={12} medSreen={12} largeScreen={12} products={products}/>
      </Row>
    </Container>
  );
}
