import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class CategoryRoute extends React.Component {
  render() {
    return(
      <Router>
        <div className='category-route'>       
          <h5>Now Trending</h5>
          <Link to='/'>Graphic Tees</Link>
          <Link to='/'>Hoodles and Sweatshirts</Link>
          <Link to='/'>Flat Front Short</Link>
          <Link to='/'>Active Wear</Link>
          <Link to='/'>Swim Trunks</Link>
          <h5>Men's Clothings</h5>
          <Link to='/'>Shirts and Tops</Link>
          <Link to='/'>Pants</Link>
          <Link to='/'>Jeans</Link>
          <Link to='/'>Short </Link>
          <Link to='/'>Coats and Outerwear</Link>
          <Link to='/'>Sweater</Link>
          <Link to='/'>Underwear</Link>
          <Link to='/'>Socks</Link>
          <h5>Shop By Style</h5>
          <Link to='/'>Casual</Link>
          <Link to='/'>Fashion</Link>
          <Link to='/'>Formal</Link>
          <Link to='/'>Outdoor</Link>
          <Link to='/'>Athletic</Link>
          <Link to='/'>Work and Duty</Link>
          <Link to='/'>Office and Career</Link>        
        </div>
      </Router>
    )
  }
}

export default CategoryRoute;
