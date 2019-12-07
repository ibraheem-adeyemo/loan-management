import React, { useState } from "react";
import { Row, Col } from 'react-bootstrap';
import Store from "./Store";
import { connect } from 'react-redux'

const StoreContainer = ({store}) => {
  const [state] = useState(store.oneKiosk);
  return(
    <div className='store-container'>
      <Row>
        {
          state.stores.map((store, i) => (
            <Col lg={4} xl={3} sm={6} key={i}>
              <Store store={store} />
            </Col>
          ))
        }
      </Row>
    </div>
  )
}
const mapSteteToProps = (state) => ({
  store: state
})

export default connect(mapSteteToProps)(StoreContainer);
