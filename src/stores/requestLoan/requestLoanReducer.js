import { requestLoan } from './requestLoanTypes';

const initialState = {
  allRequest: []
}

const requestLoanReducer = (state = initialState, action) => {
  switch(action.type) {
    case requestLoan.REQUEST_LOAN_REQUESTING:
      return {
        ...state,
        loanRequesting: true
      }
    case requestLoan.REQUEST_LOAN_SUCCESS:
      return {
        ...state,
        loanRequesting: false,
        newRequest : action.payload,
        allRequest: [...action.payload]
      }      
      case requestLoan.REQUEST_LOAN_FAILURE:
        return {
          ...state,          
          loanRequesting: false,
        }
    default:
      return state
  }
}

export default requestLoanReducer;
