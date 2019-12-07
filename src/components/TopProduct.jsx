import React from 'react';
import { Row, Col, Badge, Button } from 'react-bootstrap';
import './top-product.css';

const TopProduct = (product) => {
  return(
    <div className='top-product'>
      <Row>
        <Col md={5}>
          <div className='top-product-img'>
            <h3><Badge variant='success'>Sale</Badge></h3>
            <img src="https://images-na.ssl-images-amazon.com/images/I/910zU0vyBrL._UY395_.jpg" alt="women bag"/>
          </div>
        </Col>
        <Col>
          <div className='top-product-detail'>
            <div className='tpd-header'>
              <h3>{product.header}</h3>
              <span>{product.price}</span>
            </div>
            <p>{product.description}</p>
            <Button variant='danger'>Add To Cart</Button>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default TopProduct;
