import React from "react";
import { Container, Row, Col, Jumbotron, Button, Card } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      {/* <!-- Page Content --> */}
      <Container>
        <Row>
          <Jumbotron fluid={false}>
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
              <Card className="text-center">
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer className="text-muted">CATEGORY</Card.Footer>
              </Card>
            </Col>
          </Row>
          {/* <!-- /.row --> */}

          <Row className="my-4">
            <Col lg={12} className="header">
              <h2 class="break">
                <span>New & Hot Products</span>
              </h2>
            </Col>

            {/* INSERT CAROUSEL */}

            <Col lg={4} className="centered mt-4">
              <a class="btn btn-block">VIEW SHOP</a>
            </Col>
          </Row>

          {/* <!--Last Viewed--> */}
          <Col lg={3} md={6} className="col-centered px-5 sidebar .con">
            <h4 class="my-4 text-center">Last Viewed</h4>
            <Row>
              <Col lg={12} mb={4}>
                <Card className="text-center">
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                  <Card.Footer className="text-muted">CATEGORY</Card.Footer>
                </Card>
              </Col>
            </Row>
            {/* <!-- /.col-lg-3 --> */}
          </Col>
          {/* <!-- /.row --> */}
        </Row>
        {/* <!-- /.container --> */}
      </Container>
    </div>
  );
}
