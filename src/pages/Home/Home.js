import React from "react";
import { Row, Container } from "react-bootstrap";
import Product from "../../components/Product/Product";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

export default function Home({ products, error, loading }) {
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
        <Product
          smallScreen={12}
          medSreen={8}
          largeScreen={6}
          products={products}
        />
      </Row>
    </Container>
  );
}

{
  /* <Container className="text-center py">
<h1>Latest products</h1>
<Row>
    {products.map((product) => (
        <Col key={product._id} sm={12} md={6} lg={4}>
            <Product product={product}/>
        </Col>
    ))}

</Row>

</Container> */
}
