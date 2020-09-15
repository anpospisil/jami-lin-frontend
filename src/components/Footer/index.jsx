import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.scss"

export default function Footer() {
  return (
    <footer className="pt-5 footer">
      <Container>
        <Row>
          <Col lg={4}>
            <h4 className="m-0 text-center text-white">Footer Title</h4>
          </Col>

          <Col lg={4}>
            <h4 className="m-0 text-center text-white">Footer Title</h4>
          </Col>

          <Col lg={4}>
            <h4 className="m-0 text-center text-white">Footer Title</h4>
          </Col>
        </Row>

        <Row>
          <div className="col-lg-12">
            <ul className="social-icons text-center">
              <li>
                <a href="https://www.instagram.com/livingindiatv/">
                  <i className="fab fa-2x fa-instagram-square"></i>
                </a>
              </li>
              <li>
                <a href="https://in.pinterest.com/livingindiatv/">
                  <i className="fab fa-2x fa-pinterest-square"></i>
                </a>
              </li>
              <li>
                <a href="https://youtube.com">
                  <i className="fab fa-2x fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/livingindiatv">
                  <i className="fab fa-2x fa-twitter-square"></i>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/livingindiatv/">
                  <i className="fab fa-2x fa-facebook-square"></i>
                </a>
              </li>
            </ul>
          </div>
        </Row>

        <Row>
          <div className="col-lg-12">
            <p className="text-center text-muted">
              Copyright &copy; Andrew Pospisil Design 2020
            </p>
          </div>
        </Row>
      </Container>
      {/* <!-- /.container --> */}
    </footer>
  );
}
