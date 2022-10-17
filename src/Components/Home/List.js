import React from "react";

// Style

import "./List.css";
/***
 Bootstrap
 */
import { Container, Row, Col } from "react-bootstrap";

export default function List() {
  return (
    <div className="list">
      <Container>
        <Row>
          <Col lg={2}></Col>
          <Col lg={2}>
            <div className="img-box">
              <img alt="peopel" src="./Images/Ellipse-1.png" />
            </div>
          </Col>
          <Col lg={7}>
            <p className="title">Name Surname</p>
            <p className="sub-title">Position, company name, etc.</p>
            <p className="txt">
              Answering these questions in a testimonial is crucial for
              establishing social proof and provides an example of how your
              product can get the client where they want to be.
            </p>
            <p className="list-line"></p>
          </Col>
        </Row>

        <Row>
        <Col lg={2}></Col>
          <Col lg={2}>
            <div className="img-box">
              <img alt="peopel" src="./Images/Ellipse-2.png" />
            </div>
          </Col>
          <Col lg={7}>
            <p className="title">Another Name Surname</p>
            <p className="sub-title">And position, company name, etc.</p>
            <p className="txt">
              Finally, having previous customers clearly state that they had a
              positive experience with you and/or would recommend you in the
              future leaves your future customers feeling happy and confident
              that you are someone they want to work with.
            </p>
            <p className="list-line"></p>
          </Col>
        </Row>

        <Row>
        <Col lg={2}></Col>
          <Col lg={2}>
            <div className="img-box">
              <img alt="peopel" src="./Images/Ellipse-3.png" />
            </div>
          </Col>
          <Col lg={7}>
            <p className="title">Another Name Surname</p>
            <p className="sub-title">And position, company name, etc.</p>
            <p className="txt">
              That said, when it comes to landing pages, popups, and even
              emails, shorter testimonials tend to be more effective. Ideally,
              you’ll want to be writing quote testimonials of 50 words or less.
              Video page testimonials should be a few minutes long to provide an
              example of a problem-solution-relationship, without too much
              waffle.{" "}
            </p>
            <p className="list-line"></p>
          </Col>
        </Row>

        <Row>
        <Col lg={2}></Col>
          <Col lg={2}>
            <div className="img-box">
              <img alt="peopel" src="./Images/Ellipse-4.png" />
            </div>
          </Col>
          <Col lg={7}>
            <p className="title">Name Surname</p>
            <p className="sub-title">Position, company name, etc</p>
            <p className="txt">
              Different types of testimonials will vary in length. Good content
              marketing professionals will use a selection of quotes, videos,
              blogs, and case study testimonials to build up a story of success.
            </p>
            <p className="list-line"></p>
          </Col>
        </Row>

        <Row>
        <Col lg={2}></Col>
          <Col lg={2}>
            <div className="img-box">
              <img alt="peopel" src="./Images/Ellipse-4.png" />
            </div>
          </Col>
          
          <Col lg={7}>
            <p className="title">Name Surname</p>
            <p className="sub-title">Position, company name, etc.</p>
            <p className="txt">
              Different types of testimonials will vary in length. Good content
              marketing professionals will use a selection of quotes, videos,
              blogs, and case study testimonials to build up a story of success.
            </p>
            <p className="list-line"></p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
