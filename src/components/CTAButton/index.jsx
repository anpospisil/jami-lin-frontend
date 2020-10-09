import React from "react";
import { Link } from "react-router-dom";
import { Col, Button } from "react-bootstrap";

export default function CTAButton(props) {
  const { text, to } = props;

  return (
    <Col lg={12} className="text-center mt-4">
      <Link to={to}>
        <Button variant="custom">{text}</Button>
      </Link>
    </Col>
  );
}
