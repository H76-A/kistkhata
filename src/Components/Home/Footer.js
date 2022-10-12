import React from "react";

// Style
import "./Footer.css";

/**
 Bootstrap Imports
 */
import { Container, Row, Col, Form ,Button} from "react-bootstrap";

export default function Footer() {
  return (
    <div className="footer">
   
      <Container>
        <Row>
          <Col lg={1}></Col>
          <Col lg={4}>
            <img alt="logo" src="./Images/logo.png"  className="logo"/>{" "}
            <p className="footer-1-txt">2022, All rights reserved by <span>Unstationery</span></p> 
          </Col>
          <Col lg={4}>
            {" "}
            <p className="footer-2-txt">Unstationery</p>
            <Form.Control size="lg" type="text" placeholder="Email adress"  className="input-field"/>
            <Button variant="primary" type="submit">
                  Submit
                </Button>
          </Col>
          <Col lg={3} className='footer-3'>
          <p>Contact us</p>
          <p>FAQ</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
