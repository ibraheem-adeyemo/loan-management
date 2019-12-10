import { requestLoan } from './requestLoanTypes';

const loanRequesting = () => {
  return {
    type: requestLoan.REQUEST_LOAN_REQUESTING
  }
}
const loanRequestSuccess = (payload) => {
  return {
    type: requestLoan.REQUEST_LOAN_SUCCESS,
    payload
  }
}
const loanRequestFailure = (error) => {
  return {
    type: requestLoan.REQUEST_LOAN_FAILURE,
    error
  }
}

export const requestLoanAction = (loan) => {
  return dispatch => {
    dispatch(loanRequesting())
      console.log(loan)
    setTimeout(() => {
      dispatch(loanRequestSuccess(loan))
    }, 2000)
  }
}
