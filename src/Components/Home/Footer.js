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
          <Col>
            <img alt="logo" src="./Images/logo.png" />{" "}
            <p>2022, All rights reserved by </p> <p>Unstationery</p>
          </Col>
          <Col>
            {" "}
            <p>Unstationery</p>
            <Form.Control size="lg" type="text" placeholder="Email adress" />
            <Button variant="primary" type="submit">
                  Submit
                </Button>
          </Col>
          <Col>
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
