import React from 'react'
import CategoryRoute from './CategoryRoute';
import MainBanner from './MainBanner';
import { Row, Col } from 'react-bootstrap'
import './banner.css';

const Banner = () => {
	return (
		<div>
			<div className='banner-header'>
        <h1>Great Stuff</h1>
        <h6>More than 400,000 items</h6>
      </div>
      <Row>
        <Col md={2}>
          <CategoryRoute />
        </Col>
        <Col md={10}>
          <MainBanner />
        </Col>
      </Row>
		</div>
	)
}

export default Banner;