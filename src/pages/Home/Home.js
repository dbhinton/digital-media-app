import React, { useState, useEffect } from "react";
import { Col, Row, Container, Card } from "react-bootstrap";
import * as productApi from "../../utils/productApi";
import Product from "../../components/Product/Product";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");



  async function getProducts(showLoading) {
    try {
      showLoading ? setLoading(true) : setLoading(false);
      const data = await productApi.getAll();
      console.log(data);
      console.log(data, "these are all the prods");
      setProducts([...data.products]);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      console.log(err, "this is the error from get all Products function");
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  if (error) {
    return <ErrorMessage error={error} />;
  }

  if (loading) {
    return <Loader />;
  }
  console.log(products, "products console.log");
  return (
    <Container className="text-center py" >
      <h1>All Products</h1>
      <Row>
        <Product smallScreen={12} medSreen={8} largeScreen={6} products={products}/>
      </Row>
    </Container>
  );
}

{/* <Container className="text-center py">
<h1>Latest products</h1>
<Row>
    {products.map((product) => (
        <Col key={product._id} sm={12} md={6} lg={4}>
            <Product product={product}/>
        </Col>
    ))}

</Row>

</Container> */}