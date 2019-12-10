import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './stores/rootReducer'
import { Provider } from 'react-redux';
import CreateLoanRequest from './components/CreateLoanRequest';
import Navbar from './components/ReusableComponents/Navbar';
import Signup from './components/SignUp page/SignupPage'
import DashboardTableComponent from './components/DashboardTable/DashboardTableComponent';
import Login from './components/Login page/LoginPage';
import LandingPage from './components/landingPage/LandingPage';
import UserLoanPage from './components/UserLoanRequest/UserLoanPage';
import Permission from './components/Permission/Permission';
// import fetchProducts from './store/oneKiosk/action'
import 'bootstrap/dist/css/bootstrap.min.css';

const middlewares = [thunk]
const store = createStore(rootReducer, {}, applyMiddleware(...middlewares));
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
         <Router>
         <Navbar />
           <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/createloanrequest' component={CreateLoanRequest} name='loan request' />;
            <Route path='/loanrequestdashbord' component={DashboardTableComponent} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
            <Route path='/userloanpage' component={UserLoanPage} />
            <Route path='/permission' component={Permission} />
           </Switch>
         </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
