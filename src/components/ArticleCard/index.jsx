import React from "react";
import { Card, Button } from "react-bootstrap";
import "./style.scss";

export default function ArticleCard() {
  return (
    <Card className="">
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">CATEGORY</Card.Footer>
    </Card>
  );
}
