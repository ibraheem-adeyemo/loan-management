import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const NavBar = () => {
  const [state, setState] = useState('close')
  handleTogle = handleTogle.bind(this);
  function handleTogle() {
    if (state === 'close'){
      setState('open')
    } else {
      setState('close');
    }
  }
  return(
    <div>
      <span className='inline-block nav-bar'>
        <div className='nav-brand'>
          <Link to='/'>One Kiosk</Link>
        </div>
        <div className='togllabe-nav button' onClick={() => handleTogle()}>
          <i className="material-icons">menu</i>
        </div>
        <div className='inline-block nav-options main'>
          <div className='nav-menu'>
            <Link to='/'>Home</Link>
            <Link to='/'>About</Link>
            <Link to='/profit'>Shopper</Link>
            <Link to='/'>Contact Us</Link>
          </div>
          <div className='nav-button'>
            <Button size='sm'>Log In</Button>
          </div>
        </div>
      </span>
      <div className='togllabe-nav'>
        <div className={`nav-menu ${state}`}>
          <Link to='/'>Home</Link>
          <Link to='/'>About</Link>
          <Link to='/profit'>Shopper</Link>
          <Link to='/'>Contact Us</Link>
          <div className='nav-button'>
            <Button size='sm'>Log In</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar;