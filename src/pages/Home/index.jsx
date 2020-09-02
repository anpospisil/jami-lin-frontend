import React from "react";
import { Container, Row, Col, Jumbotron, Button, Carousel } from "react-bootstrap"
import ArticleCard from "../../components/ArticleCard";
import CTAButton from "../../components/CTAButton";

export default function Home() {
  return (
    <div>
      {/* <!-- Page Content --> */}
      <Container>
        <Row>
          <Col lg={9} className="main">
            <Jumbotron>
              <h1>Passion Is Life</h1>
              <p>May my passions also become yours...</p>
              <p>
                <Button variant="primary">Read more</Button>
              </p>
            </Jumbotron>
          

          {/* <!--Latest Articles--> */}
          <Row>
            <Col lg={12} className="header">
              <h2 class="break">
                <span>Latest Articles</span>
              </h2>
            </Col>

            <Col lg={4} md={6} mb={4}>
              <ArticleCard />
            </Col>
          </Row>
          {/* <!-- /.row --> */}
          <Row>
            <Col lg={12} className="header">
              <h2 class="break">
                <span>New & Hot Products</span>
              </h2>
            </Col>

            <Col lg={12}>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </Col>
            {/* INSERT CAROUSEL */}

            <CTAButton text="view shop" to="/shop"/>
          </Row>
          </Col>
          <Col lg={3} md={6} mb={4}>
            <h4 class="my-4 text-center">Last Viewed</h4>
            <Row>
              <Col lg={12}>
                <ArticleCard />
              </Col>
            </Row>
          </Col>
          {/* <!-- /.row --> */}
        </Row>
        {/* <!-- /.container --> */}
      </Container>
    </div>
  );
}
