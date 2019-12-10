import React from 'react';
import { Link } from 'react-router-dom';
import './dropdown.css';

const Dropdown = () => {
  const handleClick = () => {
    const dropDown = document.getElementById('drop-down');
      dropDown.style.display = 'none'
  }
  return (
    <div className='dropdown' id='drop-down'>
      <div className='drop-down'>
        <li>
          <div onClick={handleClick}>
            <Link to='/createloanrequest'>Request for new loan</Link>
          </div>
        </li>
        <li>
          <div onClick={handleClick}>
            <Link to='/loanrequestdashbord'>Manage loan request</Link>
          </div>
        </li>
        <li>
          <div onClick={handleClick}>
            <Link to=''>Profile</Link>
          </div>
        </li>
        <li>
          <div onClick={handleClick}>
            <Link to=''>Notification</Link>
          </div>
        </li>
        <li>
          <div onClick={handleClick}>
            <Link to=''>Log out</Link>
          </div>
        </li>
      </div>
    </div>
  )
}

export default Dropdown;
