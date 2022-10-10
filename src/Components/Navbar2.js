import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

// Style
import './Navbar2.css'
export default function Navbar2() {
  return (
    <div className='navbar2' >
    <Navbar  expand="lg"  >
      <Container>
      <Navbar.Brand href="#home" className="nav-logo">
          <img alt="logo" src="./Images/logo.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Testimonials</Nav.Link>
            <Nav.Link href="#features">Testimonials</Nav.Link>
            <Nav.Link href="#pricing">For business</Nav.Link>
            <Nav.Link href="#pricing">For customers</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
            <Nav.Link href="#pricing">Team</Nav.Link>
            <Nav.Link href="#pricing">
              <Button variant="outline-primary">Log in</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}
