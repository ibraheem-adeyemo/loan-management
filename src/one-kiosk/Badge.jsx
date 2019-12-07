import React from 'react';

const Badge = ({isOpened = false}) => {
  return(
    <div className={isOpened? 'badge opened': 'badge closed'}>
      <p>{isOpened? 'Opened': 'Closed'}</p>
    </div>
  )
}

export default Badge;
