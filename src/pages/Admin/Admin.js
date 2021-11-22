import React, { useState } from "react";
import { Container } from "react-bootstrap";
import AdminForm from "../../components/AdminForm/AdminForm";
import * as productApi from "../../utils/productApi";

export default function Admin() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function handleAddProduct(product) {
    try {
      setLoading(true);
      const data = await productApi.create(product);
      console.log(data, "this is response from the server in handleAddProduct");

      setProducts([data.product, ...products]);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  }
  return (
    <Container
      style={{ marginTop: "3rem", marginBottom: "2rem" }}
      className="text-center py"
    >
      <>
        <h1>Welcome to Admin Dashboard</h1>
        <AdminForm />
      </>
    </Container>
  );
}
