import React from "react";

import { Container, Row, Col,  Form, Button } from "react-bootstrap";

//Style
import './Team.css'

export default function Team() {
  return (
    <div className="team">
      <div>
        <Container>
          <Row>
            <Col lg={2}></Col>
            <Col>
              <p className="team-title">Our team</p>
            </Col>
          </Row>

          <Container>
            <Row className="team-row ">
              <Col lg={2}></Col>
              <Col lg={8}>
                <p className="team-txt">
                  Problem: Mail is boring. Solution: A platform to create
                  customizable augmented reality experiences on high-quality
                  stationery products for both consumers and businesses. We
                  print videos on anything, but we specialize in printing videos
                  on beautiful 5x7 cards and shipping them anywhere in the US.
                  Our products help make traditional mail more engaging,
                  trackable, and memorable.
                </p>
              </Col>
            </Row>
            <Row className="person">
                <Col lg={2}></Col>
              <Col lg={2}>
                <img alt="person" src="./Images/person-1.png" />{" "}
                <p className="person-title">Michael Martin</p> <p className="person-body">Chief Executive Officer</p>
              </Col>
              <Col lg={2}>
                <img alt="person" src="./Images/person-2.png" />{" "}
                <p className="person-title">Zahra Ladiwala</p>{" "}
                <p className="person-body">Engineering Technology Project Manager</p>
              </Col>
              <Col lg={2}>
                <img alt="person" src="./Images/person-3.png" />{" "}
                <p className="person-title">Shahzad Ladiwala</p> <p className="person-body">Software Engineer</p>
              </Col>
              <Col lg={2}>
                <img alt="person" src="./Images/person-4.png" />
                <p className="person-title">Abdo Hajj</p> <p className="person-body">No position</p>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>

      <div className="Blogs-proposal">
        <Container>
          <Row>
            <Col lg={1}></Col>
            <Col lg={5}>
              {" "}
              <img alt="cta-small" src=".\Images\cta-small.png" className="bottom-image" />
            </Col>
            <Col lg={5}>
              <p className="proposal-txt">
                Surprise your loved <span> homies </span>with the exclusive card
              </p>
              <Form.Control
                size="lg"
                type="text"
                placeholder="name@mail.com"
                className="input-field"
              />
              <Button variant="primary" type="submit">
                Get a proposal
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
