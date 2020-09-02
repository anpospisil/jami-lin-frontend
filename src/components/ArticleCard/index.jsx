import React from 'react'
import {Col, Card, Button} from 'react-bootstrap'

export default function ArticleCard() {
    return (


              <Card className="">
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


    )
}
