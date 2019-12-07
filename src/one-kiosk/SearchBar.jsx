import React from 'react';

const SearchBar = () => {
  return (
    <div className='search-bar'>
      <div>
        <h4>Store</h4>
      </div>
      <form>
        <input type='text' placeholder='Search' />
      </form>
    </div>
  )
}

export default SearchBar;
