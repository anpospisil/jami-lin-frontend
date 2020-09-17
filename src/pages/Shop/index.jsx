import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ShopItemCard from "../../components/ShopItemCard";
import { HashLink as Link } from "react-router-hash-link";
import "./style.scss";

export default function Shop() {
  const shopItemData = [
    {
      id: 1,
      name: "The Five Elements",
      price: 10.99,
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      image: "5elements.jpg",
      score: 4,
      tags: ["feng shui", "book"],
    },
    {
      id: 2,
      name: "The Good Vibes Starter Kit",
      price: 29.99,
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      image: "starter.jpg",
      score: 4.5,
      tags: ["feng shui", "spirituality"],
    },
    {
      id: 3,
      name: "Rosewood Face Cream",
      price: 14.99,
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      image: "rosewood.jpg",
      score: 4,
      tags: ["beauty", "skincare"],
    },
    {
      id: 4,
      name: "Metal Bowl Set",
      price: 29.99,
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      image: "metal.jpg",
      score: 3.5,
      tags: ["feng shui"],
    },
    {
      id: 5,
      name: "Rejuvenative Body Lotion",
      price: 21.99,
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      image: "body.jpg",
      score: 4,
      tags: ["beauty", "skincare"],
    },
    {
      id: 6,
      name: "Lavender Essential Oil",
      price: 7.99,
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      image: "oil.jpg",
      score: 5,
      tags: ["beauty", "skincare"],
    },
  ];

  console.log(shopItemData);
  return (
    <Container>
      <Row>
        <Col lg={3} className="my-4">
          <div class="list-group">
            <Link to="#">All</Link>
            <Link to="#">Feng Shui</Link>
            <Link to="#">Beauty</Link>
            <Link to="#">Spirituality</Link>
            <Link to="#">Books</Link>
          </div>

          {/* <!-- Search form --> */}
          <div class="md-form my-4">
            <input
              class="form-control"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
        </Col>
        {/* <!-- /.col-lg-3 --> */}

        <Col lg={9} className="my-4">
          <Row>
            {shopItemData.map(data => (
              <Col lg={4} md={6} mb={4}>
                <ShopItemCard
                  key={data.id}
                  name={data.name}
                  price={data.price}
                  desc={data.desc}
                  image={data.image}
                  score={data.score}
                  tags={data.tags}
                />
              </Col>
            ))}
          </Row>
          {/* <!-- /.row --> */}
        </Col>
        {/* <!-- /.col-lg-9 --> */}
      </Row>
      {/* <!-- /.row --> */}
    </Container>
    /* <!-- /.container --> */
  );
}
