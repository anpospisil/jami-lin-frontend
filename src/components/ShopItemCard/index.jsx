import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";

export default function ShopItemCard() {
  return (
    <Card className="">
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Link to="">
          <Card.Title>Book</Card.Title>
        </Link>

        <Card.Text>$30.00</Card.Text>
        <Card.Text>Description of this shop item.</Card.Text>
      </Card.Body>
      <Card.Footer>
        <StarRatingComponent
          name="rate2"
          editing={false}
          renderStarIcon={() => <span>★</span>}
          starCount={5}
          value={4}
        />
      </Card.Footer>
    </Card>
  );
}
