import { combineReducers } from 'redux';
import userReducer from './Users/userReducer'
import requestLoanReducer from './requestLoan/requestLoanReducer';

const rootReducer = combineReducers({
  user: userReducer,
  request: requestLoanReducer
})

export default rootReducer
