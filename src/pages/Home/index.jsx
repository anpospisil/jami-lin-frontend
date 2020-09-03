import React from "react";
import {
  Container,
  Row,
  Col,
  Jumbotron,
  Button,
  Carousel,
} from "react-bootstrap";
import ArticleCard from "../../components/ArticleCard";
import CTAButton from "../../components/CTAButton";
import Header from "../../components/Header";
import MainJumbotron from "../../components/MainJumbotron";
import MainCarousel from "../../components/MainCarousel";

export default function Home() {
  return (
    <div>
      {/* <!-- Page Content --> */}
      <Container>
        <Row>
          <Col lg={9} className="main">
            <MainJumbotron />
            {/* <!--Latest Articles--> */}
            <Row>
              <Header title="Latest Articles" />

              <Col lg={4} md={6} mb={4}>
                <ArticleCard />
              </Col>
            </Row>
            {/* <!-- /.row --> */}
            <Row>
              <Header title="New & Hot Products" />

              <MainCarousel />

              <CTAButton text="view shop" to="/shop" />
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
