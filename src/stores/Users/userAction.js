import { userTypes } from './userType';
import { findItem } from '../../helper functions/helperFunction';
import { userDetails } from '../../data/users';

const userSignUpRequest = () => {
  return {
    type: userTypes.USER_SIGNUP_REQUESTING
  }
}
const userSignUpSuccess = (payload) => {
  return {
    type: userTypes.USER_SIGNUP_SUCCESS,
    payload,
  }
}
const userSignUpFailure = (error) => {
  return {
    type: userTypes.USER_SIGNUP_FAILURE,
    error,
  }
}
const updateUserToAdmin = (payload) => {
  return {
    type: 'UPDATE_USER_TO_ADMIN',
  }
}

export const userSignupAction = (user) => {
  return (dispatch, getState) => {
    dispatch(userSignUpRequest())
    const found1 = findItem(user.email, 'emailAddress', userDetails)
    const found2 = findItem(user.email, 'emailAddress', getState())
    if (found1 || found2) {
      setTimeout(() => {
        dispatch(userSignUpFailure('This email has already registered'))
      }, 5000);
    }else {
      dispatch(userSignUpSuccess(user))
    }
  }
}

const userLoginRequest = () => {
  return {
    type: userTypes.USER_LOGIN_REQUESTING
  }
}
const userLoginSuccess = (payload) => {
  return {
    type: userTypes.USER_LOGIN_SUCCESS,
    payload,
  }
}
const userLoginFailure = (error) => {
  return {
    type: userTypes.USER_LOGIN_FAILURE,
    error,
  }
}

export const userLoginAction = (email, password) => {
  return (dispatch, getState) => {
    dispatch(userLoginRequest())

    setTimeout(() => {
      if (getState().signUp) {
        dispatch(userLoginSuccess(email))          
      } else {
        dispatch(userLoginFailure('user does not exist. Kindly Create an account'))
      }
    }, 2000); 
  }
}

export const changeUserToAdmin = () => {
  return dispatch => {
    dispatch(updateUserToAdmin())
  }
}