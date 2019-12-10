import React, { useState, useEffect } from 'react';
import SignupForm from './SignupForm';
import axios from 'axios'
import { userSignupAction } from '../../stores/Users/userAction';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const SignUp = (props) => {
  const [state, setstate] = useState({});

  useEffect(() => {
    axios.get("https://city-api.herokuapp.com/?country=nigeria")
    .then(response => {
      if (response.status === 200) {
        setstate({
          ...state,
          nigeriaStates: response.data.cities
        })
      }
    })
  }, [])

  const handleChange = (event) => {
    setstate({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.signupUser(state)
  }

  if (props.signupSuccess) {
    return <Redirect to='userloanpage' />
  } else {
    return (
      <div>
        {
          props.loginRequesting && <h3 className='center-loading'>Please wait.............</h3>
        }
        <SignupForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        countryStates={state.nigeriaStates}
         />
      </div>
    )
  }  
}

const mapStateToProps = (state) => {
  const { loggedIn, signupSuccess, signupRequesting } = state.user
  return {
    loggedIn,
    signupSuccess,
    signupRequesting
  }
}

const dispatchAction = {
  signupUser: userSignupAction
}
export default connect(mapStateToProps, dispatchAction)(SignUp);
