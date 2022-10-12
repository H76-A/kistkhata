import React from "react";

import { Container, Row, Col, Card,  Button } from "react-bootstrap";


//Style
import "./BlogArticle.css";

export default function BlogArticle() {
  return (
    <div className="blog-article">
      <Container>
        <Row>
          <Col lg={2}></Col>
          <Col>
            <h2 className="Article-title">
              Does knowing the amount of carbs in your food really make a
              difference?
            </h2>
          </Col>
        </Row>
        <Row>
          {" "}
          <Col lg={2}></Col>
          <Col lg={1}>
            <img
              alt="user"
              src="./Images/UserImage.png"
              className="userimage"
            />
          </Col>
          <Col lg={4}>
            <p className="user-title">Michelle Jolly</p>{" "}
            <p className="user-txt">
              Certified Clinical Nutritionist . <span> Sep 2, 2020 </span>
            </p>
          </Col>
          <Col>
            <img
              alt="facebook"
              src="./Images/facebook.png"
              className="vector"
            />
            <img alt="twitter" src="./Images/twitter.png" className="vector" />{" "}
            <img alt="vector" src="./Images/vector.png" className="vector" />
          </Col>
        </Row>
        <Container>
          <Row className="blogs-row ">
            <Col lg={2}></Col>
            <Col lg={5} className="article-image">
              <img alt="top-rectangle" src="./Images/Rectangle-1.png" />
            </Col>
          </Row>
          <Row>
            <Col lg={2}></Col>
            <Col lg={6}>
              <h2 className="article-heading">1. Subtitle for the article</h2>
            </Col>
          </Row>
          <Row>
            <Col lg={2}></Col>
            <Col lg={9}>
              <p className="article-body">
                Starting in the fall, I notice that my children get more
                sniffles and mucous. My older son begins to develop his
                notorious snort. After a long summer of relaxed rules which
                includes ice cream for dessert and grilled cheese sandwiches by
                the pool, I make a conscious effort to reduce the dairy included
                in their diet. If you are unconvinced about dairy having an
                effect on the mucous production and inflammation in your child’s
                sinuses, just try to eliminate it for 30 days and see if you
                notice a difference in your child. I hear from many of the
                parents of my young patients that reducing or eliminating dairy
                not only decreases their kid's constant nasal mucous , but also
                helps reduce ear infections as well.
              </p>{" "}
              <p className="article-body">
                {" "}
                Additionally, I would argue that a high dairy intake is not
                necessary for our children after a young age. In fact, a recent
                very large study in a reputable medical journal indicated that
                in Sweden, a country that has one of the highest rates of dairy
                intake, they also have the highest rates of osteoporosis and
                fractures. Here is the link to that study:
                http://www.bmj.com/content/349/bmj.g6015{" "}
              </p>{" "}
              <p className="article-body">
                If you are concerned about calcium intake in your child, here
                are non-dairy sources of calcium: calcium-fortified cereals,
                breads, rice milk, or almond milk, canned fish (sardines, salmon
                with bones), soybeans and other soy products (tofu, soy yogurt,
                tempeh), some other beans, and some leafy greens (collard and
                turnip greens, kale, bok choy). Of note, ½ cup of kale or
                spinach contains half the amount of calcium as 1 cup of milk.
                This link contains a chart to compare amounts of calcium in
                various foods:
              </p>
              <p className="article-body">
                {" "}
                http://nutritionstudies.org/how-to-get-calcium-without-dairy{" "}
              </p>
              <p className="article-body">
                I also recommend decreasing the amount of gluten in your child’s
                diet as this has also been noted to be an inflammatory substance
                for many children. Again, doing a trial of elimination for 30
                days will help you decide what’s right for your own child.
              </p>
            </Col>
          </Row>
          <Row className="blogs-row">
            <Col lg={2}></Col>
            <Col lg={6}>
              <h2 className="article-heading">2. Subtitle for the article</h2>
            </Col>
          </Row>
          <Row>
            <Col lg={2}></Col>
            <Col lg={9}>
              <p className="article-body">
                Starting in the fall, I notice that my children get more
                sniffles and mucous. My older son begins to develop his
                notorious snort. After a long summer of relaxed rules which
                includes ice cream for dessert and grilled cheese sandwiches by
                the pool, I make a conscious effort to reduce the dairy included
                in their diet. If you are unconvinced about dairy having an
                effect on the mucous production and inflammation in your child’s
                sinuses, just try to eliminate it for 30 days and see if you
                notice a difference in your child. I hear from many of the
                parents of my young patients that reducing or eliminating dairy
                not only decreases their kid's constant nasal mucous , but also
                helps reduce ear infections as well.
              </p>{" "}
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="blogs-row">
            <Col lg={2}></Col>
            <Col lg={3}>
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
            <Col lg={3}>
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
            <Col>
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
            <Col lg={3}>
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
            <Col lg={3}>
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
            <Col>
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
            <Col></Col>
          </Row>
        </Container>
       
      </Container>
      
      <div className="Blogs-proposal-1">
          <Container className="Blogs-proposal-1">
            <Row>
              <Col lg={3}></Col>
              <Col lg={4}>
                <p className="proposal-txt">
                  BNeed to add a CTA text for this text section
                </p>
              </Col>
              <Col lg={1}></Col>
              <Col>
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
