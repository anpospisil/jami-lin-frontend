import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ShopItemCard from '../../components/ShopItemCard'

export default function Shop() {
    return (
    <Container>
      <Row>
        <Col lg={3} className="my-4">
          <div class="list-group">
            <a href="#" class="list-group-item active">All</a>
            <a href="#" class="list-group-item">Feng Shui</a>
            <a href="#" class="list-group-item">Beauty</a>
            <a href="#" class="list-group-item">Spirituality</a>
            <a href="#" class="list-group-item">Books</a>
          </div>

          {/* <!-- Search form --> */}
        <div class="md-form my-4">
          <input class="form-control" type="text" placeholder="Search" aria-label="Search" />
        </div>
        </Col>
        {/* <!-- /.col-lg-3 --> */}

        <Col lg={9} className="my-4">
          <Row>
            
            <ShopItemCard />
            <ShopItemCard />
            <ShopItemCard />
            
          </Row>
          {/* <!-- /.row --> */}
        </Col>
        {/* <!-- /.col-lg-9 --> */}
      </Row>
      {/* <!-- /.row --> */}
    </Container>
    /* <!-- /.container --> */
   
    )
}
