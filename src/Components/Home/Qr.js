import React from "react";

// Style
import './Qr.css'

/******
 Bootstrap 
 */
import { Container, Row, Col } from "react-bootstrap";

export default function Qr() {
  return (
    <div className="Qr">
      <Container>
        <Row>
          <Col lg={6}><div className="img-box"><img alt='buseness-card' src="./Images/Business-card.png" /></div></Col>
          <Col lg={5}>
            <p className="title">No app downloads</p>
            <p className="sub-title">
              Nobody likes downloading apps. So all of our mixed reality
              experiences can be viewed by scanning a QR code.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <div className="txt-section">
            <p className="title">Make a lasting impression</p>
            <p className="sub-title">
              Unstationery campaigns are more compelling than for regular mail.
              It helps you to increase customers attention and loyalty
            </p>
            </div>
          </Col>
          <Col lg={5}><div className="card">
            <p className="card-title">Unstationery live card</p>
            <p className="card-line"> </p>
            <p className="card-txt">up to 4 times more impressive</p>
            <p className="txt">Regular letter</p>
            <p className="txt-line"></p>
            <p className="txt">boring reaction to the mail</p>
            </div></Col>
        </Row>
      </Container>
    </div>
  );
}
