import React from 'react';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import StoreContainer from './StoreContainer';
import './one-kiosk.css';

const KioskFrontPage = () => {
  return (
    <div>
      <NavBar />
      <SearchBar />
      <StoreContainer />
    </div>
  )
}

export default KioskFrontPage;
