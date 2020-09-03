import React from 'react'
import { Col, Card } from 'react-bootstrap'
import StarRatingComponent from 'react-star-rating-component'

export default function ShopItem() {
    return (
        <Col lg={9}>

<Card className="mt-4">
      <Card.Img variant="top fluid" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Product Name</Card.Title>
        <h4>$10.00</h4>
        <Card.Text>
          Desc of Item
        </Card.Text>
        
        <StarRatingComponent
          name="rate2"
          editing={false}
          renderStarIcon={() => <span>★</span>}
          starCount={5}
          value={4}
        />
      </Card.Body>
    </Card>

        </Col>
    )
}
