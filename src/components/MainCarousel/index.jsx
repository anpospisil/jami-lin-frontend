import React from "react";
import { Col, Card } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import StarRatingComponent from "react-star-rating-component";
import "./style.scss";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function MainCarousel(props) {
  const data = props.data;

  console.log(data);
  return (
    <Col lg={12}>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {data.map((data) => {
          return (
            <Card className="w-100">
              <Card.Img
                variant="top"
                src={require(`../../img/${data.image}`)}
              />
              <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>${data.price}</Card.Text>
                <Card.Text>{data.desc}</Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted">
                <StarRatingComponent
                  name="rate2"
                  editing={false}
                  renderStarIcon={() => <span>★</span>}
                  starCount={5}
                  value={data.score}
                />
              </Card.Footer>
            </Card>
          );
        })}
      </Carousel>
      {/* 
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require(`../../img/${image}`)}
            alt={name}
          />
          <Carousel.Caption>
            <h3>{name}</h3>
            <p>${price}</p>
            <p>{desc}</p>
            <StarRatingComponent
              name="rate2"
              editing={false}
              renderStarIcon={() => <span>★</span>}
              starCount={5}
              value={score}
            />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
    </Col>
  );
}
