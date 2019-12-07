import React, { useState } from 'react';
import Star from './Star';

const StarRating = ({totalStar}) => {
  const [starSelected, setStars] = useState(0);
  return(
    <div className='star-rating'>
      {
        [...Array(totalStar)].map((num, i) => (
          <Star key={i} selected={i < starSelected} onClick={() => setStars(i + 1)} />
        ))
      }
    </div>
  )
}

export default StarRating;
