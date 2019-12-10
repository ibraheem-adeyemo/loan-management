import React, { useState} from 'react';
import LoginForm from './LoginForm';
import {connect} from 'react-redux';
import { userLoginAction } from '../../stores/Users/userAction';
import { Redirect } from 'react-router-dom'

const Login = (props) => {
  const [state, setstate] = useState({});

  const handleChange = (event) => {
    setstate({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginUSer(state.email, state.password)
  }
  if (props.loggedIn) {
    return <Redirect to='userloanpage' />
  } else {
    return (
      <div>
        {
          props.loginRequesting && <h3 className='center-loading'>Please wait.............</h3>
        }
        {
          props.error && <h3 className='center-loading'>{props.error}</h3>
        }
        <LoginForm
        handleSubmit={handleSubmit}
        handleChange={handleChange} />
      </div>
    )
  }  
}

const mapStateToProps = (state) => {
  const { loggedIn, loggedInSuccess, loginRequesting, error } = state.user
  return {
    loggedIn,
    loggedInSuccess,
    loginRequesting,
    error
  }
}

const dispatchAction = {
  loginUSer: userLoginAction
}

export default connect(mapStateToProps, dispatchAction)(Login);
