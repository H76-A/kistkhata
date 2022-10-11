import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

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
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/testimonials'>Testimonials</Nav.Link>
            <Nav.Link as={Link} to='/forbusiness'>For business</Nav.Link>
            <Nav.Link as={Link} to='/forcustomer'For >Customers</Nav.Link>
            <Nav.Link as={Link} to='/forblogs'>Blog</Nav.Link>
            <Nav.Link as={Link} to='/forteam'>Team</Nav.Link>
            <Nav.Link as={Link} to='/login'>
              <Button variant="outline-primary">Log in</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}
