import axios from 'axios';
import {
  FETCH_PRODUCTS_STARTED,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE
} from './type';

const fetchProductStarted = () => {
  return {
    type: FETCH_PRODUCTS_STARTED
  }
}

const fetchProductSuccess = (object) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payLoad: object
  }
}

const fetchProductFailure = (error) => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payLoad: error
  }
}

const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductStarted())
    // fetch product from API
    axios.get('https://profitcommerce2.herokuapp.com/products')
    .then((products) => {
      console.log(products.data);
      dispatch(fetchProductSuccess(products.data))
    }).catch((error) => {
      console.log(error)
      dispatch(fetchProductFailure(error))
    })
  }
}

export default fetchProducts;
