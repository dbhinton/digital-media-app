import { Container, Col, Spinner } from "react-bootstrap";

import React from "react";

export default function Loader() {
  return (
    <Container>
      <Col>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Col>
    </Container>
  );
}
