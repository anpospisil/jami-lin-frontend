import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ArticleCard from "../../components/ArticleCard";
import CTAButton from "../../components/CTAButton";
import Header from "../../components/Header";
import MainJumbotron from "../../components/MainJumbotron";
import MainCarousel from "../../components/MainCarousel";

const articleData = [
  {
    id: 1,
    title: "Boost Productivity: 5 Feng Shui Office Hacks",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    author: "Adora Eternia",
    image: "office.jpg",
    published: "2012-04-23T18:25:43.511Z",
    updated: "2012-04-23T18:25:43.511Z",
    tags: ["feng shui"],
  },
  {
    id: 2,
    title: "Feng Shui For Small Spaces",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    author: "Adam Eternia",
    image: "studio.jpg",
    published: "2012-05-23T18:25:43.511Z",
    updated: "2012-04-23T18:25:43.511Z",
    tags: ["feng shui"],
  },
  {
    id: 3,
    title: "Is Your Skin PH Out Of Balance?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    author: "Bob Loblaw",
    image: "citrus.jpg",
    published: "2012-06-23T18:25:43.511Z",
    updated: "2012-04-23T18:25:43.511Z",
    tags: ["beauty, skincare"],
  },
  
];

export default function Home() {
  articleData.map(data =>
    console.log(data.title)
    )
  return (
    <div>
      {/* <!-- Page Content --> */}
      {/* <img src={require("../../img/office.jpg")} alt="office" /> */}
      <Container>
        <Row>
          <Col lg={9} className="main">
            <MainJumbotron />
            {/* <!--Latest Articles--> */}
            <Row>
              <Header title="Latest Articles" />
              {articleData.map(data => 
              <Col lg={4} md={6} mb={4}>
              
                  <ArticleCard
                    key={data.id}
                    title={data.title}
                    content={data.content}
                    image={data.image}
                    tags={data.tags}
                  />
                  
              </Col>
              )}
            </Row>
            {/* <!-- /.row --> */}
            <Row>
              <Header title="New & Hot Products" />

              <MainCarousel />

              <CTAButton text="view shop" to="/shop" />
            </Row>
          </Col>
          <Col lg={3} md={6} mb={4}>
            <h4 className="my-4 text-center">Last Viewed</h4>
            <Row>
              <Col lg={12}>
                {/* <ArticleCard /> */}
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
