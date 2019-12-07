import React, { Component } from 'react'
import Banner from '../components/banner/Banner';
import TopProduct from '../components/TopProduct'

class Products extends Component {
  render() {
    return (
      <div>
        <Banner />
        <TopProduct />
      </div>
    )
  }
}

export default Products;
