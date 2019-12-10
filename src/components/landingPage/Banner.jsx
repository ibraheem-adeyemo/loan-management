import React from 'react';
import Button from '../ReusableComponents/Button'
import {useHistory } from 'react-router-dom'

const Banner = () => {
  let history = useHistory();
  const clickRouting = (page) => {
    history.push(`/${page}`)
  }
  return (
    <div className='banner'>
      <div className='banner-div'>
        <img src='/images/general/Farming.jpg' alt='' />
        <div className='banner-content'>
          <h2>FOCUS ON FARMING <br/> WE WILL PROVIDE YOU MONEY</h2>           
        <div className='banner-button'>
          <Button
          text='Request for loan'
          width='150px'
          height='40px'
          color='orangered'
          handleClick={() => clickRouting('createloanrequest')} />
        </div>        
        </div>
      </div>
    </div>
  )
}

export default Banner
