import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer class="pt-5 bg-dark">
      <Container>
        <Row>
          <Col lg={4}>
            <h4 class="m-0 text-center text-white">Footer Title</h4>
          </Col>

          <Col lg={4}>
            <h4 class="m-0 text-center text-white">Footer Title</h4>
          </Col>

          <Col lg={4}>
            <h4 class="m-0 text-center text-white">Footer Title</h4>
          </Col>
        </Row>

        <Row>
          <div class="col-lg-12">
            <ul class="social-icons text-center">
              <li>
                <a href="https://www.instagram.com/livingindiatv/">
                  <i class="fab fa-2x fa-instagram-square"></i>
                </a>
              </li>
              <li>
                <a href="https://in.pinterest.com/livingindiatv/">
                  <i class="fab fa-2x fa-pinterest-square"></i>
                </a>
              </li>
              <li>
                <a href="https://youtube.com">
                  <i class="fab fa-2x fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/livingindiatv">
                  <i class="fab fa-2x fa-twitter-square"></i>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/livingindiatv/">
                  <i class="fab fa-2x fa-facebook-square"></i>
                </a>
              </li>
            </ul>
          </div>
        </Row>

        <Row>
          <div class="col-lg-12">
            <p class="text-center text-muted">
              Copyright &copy; Andrew Pospisil Designs 2020
            </p>
          </div>
        </Row>
      </Container>
      {/* <!-- /.container --> */}
    </footer>
  );
}
