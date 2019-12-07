import React, { Component } from 'react';
import ProductPage from './pages/ProductsPage';
import KioskFrontPage from './one-kiosk/KioskFrontPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/rootReducer'
import { Provider } from 'react-redux';
import fetchProducts from './store/oneKiosk/action'
import 'bootstrap/dist/css/bootstrap.min.css';

const middlewares = [thunk]
const store = createStore(rootReducer, {}, applyMiddleware(...middlewares));
store.dispatch(fetchProducts());
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
         <Router>
          <Route path='/profit' component={ProductPage} />
          <Route exact path='/' component={KioskFrontPage} />
         </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
