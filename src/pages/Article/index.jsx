import React from "react";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";
import ArticleCard from "../../components/ArticleCard";
import ShopItemCard from "../../components/ShopItemCard";
import CTAButton from "../../components/CTAButton";
import "./style.scss";

export default function Article() {
  return (
    <Container>
      <Row>
        <Col lg={12} >
          <Jumbotron fluid className="spacer" />
        </Col>

        <Col lg={12} className="article-cat">
          <h2>feng shui</h2>
        </Col>

        <Col lg={12}>
          <Jumbotron fluid className="article-background">
            <Container className="article-header">
              <h2 className="head display-4">Feng Shui Your Living Room</h2>
              <h3 className="lead">
                Follow these 5 easy steps for a more balanced living room.
              </h3>
              <hr className="my-4" />
              <p>By: Authors Name - 18/04/2020</p>
            </Container>
          </Jumbotron>
        </Col>
      </Row>

      <Row>
        <Col lg={12}>
          <img
            src={"../../img/living-room.jpg"}
            className="img-fluid"
            alt="Living Room"
          />
        </Col>
      </Row>

      <Row className="d-flex justify-content-center">
        <Col lg={8} className="article-content">
          <p>
            Having a balanced, positively energized space is important for your
            well-being. Where you live and how it makes you feel makes a huge
            difference in your quality of living. While your bedroom and
            bathroom may be the first rooms to come to mind, your living room
            shouldn't be forgotten.
          </p>

          <ol>
            <li>
              <h3>Clear the Space</h3>
              <p>
                Space clearing is always an important step in creating good feng
                shui. The living room is especially important to space clear
                often because it’s one of the more public areas of the home.
              </p>
            </li>

            <li>
              <h3>Air It Out</h3>
              <p>
                A super-easy way to clear your living room is to open up all the
                windows for a minimum of nine minutes. Nine is the most
                auspicious number in feng shui.
              </p>
            </li>

            <li>
              <h3>Declutter Your Stuff</h3>
              <p>
                The truth of our modern times is that we have way too much
                “stuff” that accumulates in our spaces. All the clutter in our
                home mirrors the overwhelm, stress, and hectic busyness of our
                everyday lives.
              </p>
            </li>

            <li>
              <h3>Make Good Use of the Bagua</h3>
              <p>
                Overlay the feng shui Bagua energy map on your home to see which
                of the nine areas corresponds to the location of your living
                room. You can then use the qualities of this area to enhance the
                feng shui of your living room. An easy way to do this is to
                apply the color of the area.
              </p>
            </li>

            <li>
              <h3>Balance the Five Elements</h3>
              <p>
                The five elements are a Taoist system that uses the cycles of
                nature to inform and balance our health and well-being. The five
                elements are earth, metal, water, wood, and fire.
              </p>

              <p>
                An easy way to bring good feng shui into your living room is to
                include something from each of the five elements in your space.
              </p>
            </li>
          </ol>
        </Col>
      </Row>
      <Row>
        <div className="col-lg-12 header">
          <h2 className="break">
            <span>Products You Might Like</span>
          </h2>
        </div>
      </Row>
      <Row>
        <ShopItemCard />

        <CTAButton text="view shop" to="/shop" />
      </Row>

      <Row>
        <ArticleCard />
      </Row>
    </Container>
  );
}
