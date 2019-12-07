import React from 'react';
import StarRating from './StarRating';
import { Button } from 'react-bootstrap';
import Badge from './Badge';

const Store = ({store}) => {
  return(
    <div className='local-card'>
      <div className='card-img'>
        <img src={store.logo} alt={store.name} />
      </div>
      <div className='card-content'>
        <div className='cc-upper'>
          <h6>{store.name}</h6>
          <StarRating totalStar={4} />
        </div>
        <div className='cc-below'>
          <div>
          {
            store.tags.map((tag, i) => (
              <Button variant='outline-secondary' key={i}>{tag}</Button>
            ))
          }
          </div>
          <Badge isOpened={store.isOpened} />
        </div>
      </div>
    </div>
  )
}

export default Store;
