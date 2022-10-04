import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";

import './Navbar.css'
export default function Navbar1() {
  return (
    
    <div className="Navbar-box">
    <Navbar className="Navbar" >
      <Container>
       <Navbar.Brand className="img-brand"><img alt="logo" src="./Images/logo.png" className="logo"/></Navbar.Brand>
        <Nav  className="justify-content">
          <Nav.Link  className="nav-link" href="#home">Home</Nav.Link>
          <Nav.Link className="nav-link" href="#features">Testimonials</Nav.Link>
          <Nav.Link className="nav-link" href="#pricing">For business</Nav.Link>
          <Nav.Link className="nav-link" href="#pricing">For customers</Nav.Link>
          <Nav.Link  className="nav-link"href="#pricing">Blog</Nav.Link>
          <Nav.Link  className="nav-link"href="#pricing">Team</Nav.Link>
         <Nav.Link href="#pricing">
            <Button variant="outline-primary" >Log in</Button>
          </Nav.Link></Nav>
      </Container>
    </Navbar>
    </div>
  );
}
