import React from 'react';
import { Row, Col } from 'react-bootstrap';

const MainBanner = () => {
  return(
    <div className='main-banner'>
      <Row>
        <Col>
          <div className='main-banner-top'>
            <img src="/images/Banner/Profit-banner2.jpg" alt="Shirt"/>
          </div>
        </Col>
      </Row>
      {/* <Row>
        <Col>
          <div className=''>
            <img src="https://www.dhresource.com/0x0/f2/albu/g6/M01/71/E5/rBVaR1tpwy6AL75VAAF0wuMKVbA829.jpg" alt="white trekkers"/>
          </div>
        </Col>
        <Col>
          <div className=''>
            <img src="https://www.dhresource.com/0x0/f2/albu/g6/M01/71/E5/rBVaR1tpwy6AL75VAAF0wuMKVbA829.jpg" alt="white trekkers"/>
          </div>
        </Col>
      </Row> */}
    </div>
  )
}

export default MainBanner;
