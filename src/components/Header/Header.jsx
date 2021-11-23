import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom'


export default function Header({user, handleLogout}) {
  return (
    <header>
      {/* <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar> */}

      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        collapseOnSelect
        fixed="top"
        sticky="top"
      >
        <Container>
          <Link to="/"><Navbar.Brand>Hunt's Photo</Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={NavLink} to='/admin' exact>Admin</Nav.Link>
              <Nav.Link as={NavLink} to='/login' exact><i className="fas fa-user"></i> Login</Nav.Link>
              {/* <Nav.Link as={NavLink} to='' onClick={handleLogout}>Logout</Nav.Link> */}
              <Nav.Link as={NavLink} to='/cart' exact><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
              <Nav.Link as={NavLink} to={`/${user}`}></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </header>
  );
}
