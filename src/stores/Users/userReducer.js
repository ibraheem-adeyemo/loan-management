import { userTypes } from './userType';

const initialState = {
  loggedIn : false,
  signUp: false
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case userTypes.USER_SIGNUP_REQUESTING:
      return {
        ...state,
        signupRequesting: true
      }
    case userTypes.USER_LOGIN_REQUESTING:
      return {
        ...state,
        loginRequesting: true
      }
    case userTypes.USER_SIGNUP_SUCCESS:
      return {
        ...state,
        signupRequesting: false,
        loggedIn: true,
        signupSuccess: true,
        user: action.payload,
        error: ''
      }
      case userTypes.USER_LOGIN_SUCCESS:
        return {
          ...state,
          loginRequesting: false,
          loggedIn: true,
          user: action.payload
        }
      case userTypes.USER_LOGIN_FAILURE:
        return {
          ...state,
          loggedIn: false,
          signupRequesting: false,
          loginRequesting: false,
          error: action.error
        }
      case 'UPDATE_USER_TO_ADMIN':
        return {
          ...state,
          isAdmin: true
        }
    default:
      return state
  }
}

export default userReducer;
