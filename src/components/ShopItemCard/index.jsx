import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";

export default function ShopItemCard({name, price, desc, image, score, tags}) {
  return (
    <Card className="" tags={tags}>
      <Card.Img variant="top" src={require( `../../img/${image}`)}  />
      <Card.Body>
        <Link to="">
          <Card.Title>{name}</Card.Title>
        </Link>

        <Card.Text>${price}</Card.Text>
        <Card.Text>{desc}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <StarRatingComponent
          name="rate2"
          editing={false}
          renderStarIcon={() => <span>★</span>}
          starCount={5}
          value={score}
        />
      </Card.Footer>
    </Card>
  );
}
