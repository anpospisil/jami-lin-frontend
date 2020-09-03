import React from "react";
import { Col } from "react-bootstrap";

import "./style.scss";

export default function Header(props) {
  const { title } = props;

  return (
    <Col lg={12} className="header">
      <h2 class="break">
        <span>{title}</span>
      </h2>
    </Col>
  );
}
