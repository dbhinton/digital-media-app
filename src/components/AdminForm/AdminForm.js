import React, { useState } from "react";
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function AdminForm({ handleCreateProduct }) {
  const [selectedFile, setSelectedFile] = useState("");
  const [state, setState] = useState({
    product: "",
    price: "",
    description: "",
  });
  const navigate = useNavigate();

  function handleFileInput(e) {
    setSelectedFile(e.target.files[0]);
  }

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("photo", selectedFile);
    formData.append("name", state.name);
    formData.append("description", state.description);
    formData.append("price", state.price);
    handleCreateProduct(formData);
    navigate("/");
  }
  return (
    <div>
      <Container style={{ marginTop: "3rem", marginBottom: "2rem" }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                name="name"
                value={state.name}
                placeholder="Name"
                onChange={handleChange}
                required
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Price
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                name="price"
                value={state.price}
                placeholder="Price"
                onChange={handleChange}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalPassword"
          >
            <Form.Label column sm={2}>
              Description
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                name="description"
                value={state.description}
                placeholder="Description"
                onChange={handleChange}
                required
              />
            </Col>
          </Form.Group>

          <Form.Control
            className="form-control"
            type="file"
            name="photo"
            placeholder="upload image"
            onChange={handleFileInput}
          />

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit">Submit</Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
}
