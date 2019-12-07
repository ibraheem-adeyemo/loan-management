import { 
  FETCH_PRODUCTS, 
  PRODUCTS_FETCH_FAILURE,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_LOADING
} from './type'

const initialState = {
  isLoading: false,
  products: {},
  productIds: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case PRODUCTS_FETCH_SUCCESS: return {
      ...state,
      products: {...action.products},
      productIds: Object.keys(action.products)
    }
    default: return state;
  }
}
