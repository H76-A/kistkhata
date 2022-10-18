import React from "react";

/**
 * Bootstrap
 */

import { Container, Row, Col, Card,Form ,Button} from "react-bootstrap";
import { Link } from "react-router-dom";
// style
import "./ForBlogs.css";



export default function ForBlogs() {

  return (
    <div className="forblogs">
      <div>
      <Container>
        <Row>
          <Col lg={2}></Col>
          <Col>
            <p className="blog-title">Our blog title</p>
          </Col>
        </Row>
        <Row>
          {" "}
          <Col lg={2}></Col>
          
          <Col className="blog-search">
            <Form.Control
                size="lg"
                type="text"
                placeholder="Search"
                className="search-field"
              /></Col>
        </Row>
        <Container>
          <Row className="blogs-row ">
            <Col lg={2}></Col>
            <Col lg={5} className="blog-background">
              <Link to='/Article' >
              <img alt="top-rectangle" src="./Images/Rectangle-1.png"  className="top-image"/>
              </Link>
            </Col>
            <Col lg={4} className="blog-background" >
              <p className="blog-txt">
                Does knowing the amount of carbs in your food really make a
                difference?
              </p>
              <p className="blog-txt1">
                Michelle Jolly{" "}
                <span className="blog-txt2">Created March 28th, 2021</span>
              </p>
            </Col>
          </Row>
          <Row className="blogs-row">
            <Col lg={2}></Col>
            <Col lg={3} className="col-margin">
              <Card style={{ width: "17rem" }}>
                <Card.Img variant="top" src="./Images/Rectangle-2.png" />
                <Card.Body>
                  <Card.Subtitle className="card-txt">
                    Summer delights with basil!{" "}
                  </Card.Subtitle>
                  <Card.Text>by Wendy Obstler</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} className="col-margin">
              {" "}
              <Card style={{ width: "17rem" }}>
                <Card.Img variant="top" src="./Images/Rectangle-3.png" />
                <Card.Body>
                  <Card.Subtitle className="card-txt">
                    Summer delights with basil!{" "}
                  </Card.Subtitle>
                  <Card.Text>by Wendy Obstler</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-margin">
              {" "}
              <Card style={{ width: "17rem" }}>
                <Card.Img variant="top" src="./Images/Rectangle-4.png" />
                <Card.Body>
                  <Card.Subtitle className="card-txt">
                    Summer delights with basil!{" "}
                  </Card.Subtitle>
                  <Card.Text>by Wendy Obstler</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="blogs-row">
            <Col lg={2}></Col>
            <Col lg={3} className="col-margin">
              {" "}
              <Card style={{ width: "17rem" }}>
                <Card.Img variant="top" src="./Images/Rectangle-5.png" />
                <Card.Body>
                  <Card.Subtitle className="card-txt">
                    Summer delights with basil!{" "}
                  </Card.Subtitle>
                  <Card.Text>by Wendy Obstler</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={3} className="col-margin">
              {" "}
              <Card style={{ width: "17rem" }}>
                <Card.Img variant="top" src="./Images/Rectangle-6.png" />
                <Card.Body>
                  <Card.Subtitle className="card-txt">
                    Summer delights with basil!{" "}
                  </Card.Subtitle>
                  <Card.Text>by Wendy Obstler</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-margin">
              {" "}
              <Card style={{ width: "17rem" }}>
                <Card.Img variant="top" src="./Images/Rectangle-7.png" />
                <Card.Body>
                  <Card.Subtitle className="card-txt">
                    Summer delights with basil!{" "}
                  </Card.Subtitle>
                  <Card.Text>by Wendy Obstler</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="blogs-row">
            <Col lg={2}></Col>
            <Col lg={5} className="blog-background">
              <img alt="top-rectangle" src="./Images/Rectangle-1.png"  className="top-image"/>
            </Col>
            <Col lg={4} className="blog-background">
              <p className="blog-txt">
                Does knowing the amount of carbs in your food really make a
                difference?
              </p>
              <p className="blog-txt1">
                Michelle Jolly{" "}
                <span className="blog-txt2">Created March 28th, 2021</span>
              </p>
            </Col>
          </Row>
          <Row className="blogs-row">
            <Col lg={2}></Col>
            <Col lg={3} className="col-margin">
              {" "}
              <Card style={{ width: "17rem" }}>
                <Card.Img variant="top" src="./Images/Rectangle-2.png" />
                <Card.Body>
                  <Card.Subtitle className="card-txt">
                    Summer delights with basil!{" "}
                  </Card.Subtitle>
                  <Card.Text>by Wendy Obstler</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} className="col-margin">
              {" "}
              <Card style={{ width: "17rem" }}>
                <Card.Img variant="top" src="./Images/Rectangle-3.png" />
                <Card.Body>
                  <Card.Subtitle className="card-txt">
                    Summer delights with basil!{" "}
                  </Card.Subtitle>
                  <Card.Text>by Wendy Obstler</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-margin">
              {" "}
              <Card style={{ width: "17rem" }}>
                <Card.Img variant="top" src="./Images/Rectangle-4.png" />
                <Card.Body>
                  <Card.Subtitle className="card-txt">
                    Summer delights with basil!{" "}
                  </Card.Subtitle>
                  <Card.Text>by Wendy Obstler</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="blogs-row">
            <Col lg={2}></Col>
            <Col lg={3} className="col-margin">
              {" "}
              <Card style={{ width: "17rem" }}>
                <Card.Img variant="top" src="./Images/Rectangle-5.png" />
                <Card.Body>
                  <Card.Subtitle className="card-txt">
                    Summer delights with basil!{" "}
                  </Card.Subtitle>
                  <Card.Text>by Wendy Obstler</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} className="col-margin">
              {" "}
              <Card style={{ width: "17rem" }}>
                <Card.Img variant="top" src="./Images/Rectangle-6.png" />
                <Card.Body>
                  <Card.Subtitle className="card-txt">
                    Summer delights with basil!{" "}
                  </Card.Subtitle>
                  <Card.Text>by Wendy Obstler</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-margin">
              {" "}
              <Card style={{ width: "17rem" }}>
                <Card.Img variant="top" src="./Images/Rectangle-7.png" />
                <Card.Body>
                  <Card.Subtitle className="card-txt">
                    Summer delights with basil!{" "}
                  </Card.Subtitle>
                  <Card.Text>by Wendy Obstler</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        
      </Container>
      </div>
     
      <div className="Blogs-proposal">
        <Container>
          <Row >
            <Col lg={1}></Col>
            <Col lg={5}> <img alt="cta-small" src=".\Images\cta-small.png" className="bottom-image" /></Col>
            <Col lg={5}><p className="proposal-txt">Surprise your loved <span > homies </span>with the exclusive card</p>
            
            <Form.Control size="lg" type="text" placeholder="name@mail.com"  className="input-field"/>
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
