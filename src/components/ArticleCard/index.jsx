import React from "react";
import { Card } from "react-bootstrap";
import "./style.scss";

export default function ArticleCard(props) {
  
  const { title, content, image, tags} = props

  console.log(image)

  return (
    <Card className="" >
      <Card.Img variant="top" src={require( `../../img/${image}`)} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
      {tags.map((tag) => {
        return <Card.Footer className="text-muted" key={tag}>{tag}</Card.Footer>;
      })}
    </Card>
  );
}
