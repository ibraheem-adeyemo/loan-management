import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import Dropdown from '../Dropdown/Dropdown';
import Button from '../ReusableComponents/Button'
import { FaRegBell } from 'react-icons/fa';
// import Modal from '../Reuseable/Modal';
import './navbar.css'


export const Navbar = (props) => {
  const toggleDropdown = () => {
    const dropDown = document.getElementById('drop-down');
    if (dropDown.style.display === 'none') {
      dropDown.style.display = 'block'
    } else {
      dropDown.style.display = 'none'
    }
  }
  return (
    <div>
      <div className='navbar-container'>
      <header className='navbar-header'>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <Link to="/" className="navbar-brand">
          <div className="logo">
            <img src='/images/general/best-web-hosting-for-a-personal-website.jpg' alt=".." />
          </div>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div style={{ flexDirection: 'row-reverse' }} className="collapse navbar-collapse" id="navbarContent">
          <div className="list-container">
          {!props.loggedIn ?
            (<ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">About Us</Link>
              </li>
              <li className="nav-item">
                <Link to="/createloanrequest" className="nav-link">Create request</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link"><button className="btn  btn-logIn border text-dark bg-white">LOG IN</button></Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="nav-link"><button className="btn btn-signUp">SIGN UP</button></Link>
              </li>
            </ul>) :
            (<ul className="navbar-nav">
              <li className="nav-item">
                <Button 
                text='Account'
                textColor='green'
                color='white'
                width='150px'
                handleClick={toggleDropdown} />
              </li>
              <li className='nav-item'>
                <div className='notification-icon'>
                  <FaRegBell size='2em' />
                  <span className='notification'>6</span>
                </div>
              </li>
            </ul>)
          }
          </div>
        </div>
      </nav>      
    </header>
    </div>
    <Dropdown />
    </div>
  )
}
const mapStateToProps = state => {
  return {
    loggedIn: state.user.loggedIn
  }
};

export default withRouter(connect(mapStateToProps, {})(Navbar));