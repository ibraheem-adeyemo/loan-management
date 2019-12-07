import { combineReducers } from 'redux'
import productsReducer from './products/reducer';
import storeReducer from './oneKiosk/reducer';

const rootReducer = combineReducers({
  products: productsReducer,
  oneKiosk: storeReducer
});

export default rootReducer;
