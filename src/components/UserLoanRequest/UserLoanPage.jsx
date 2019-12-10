import React from 'react';
import Button from '../ReusableComponents/Button';
import { useHistory } from 'react-router-dom';
import './userLoanPage.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const UserLoanPage = (props) => {
  let history = useHistory();
  const clickRouting = (page) => {
    history.push(`/${page}`)
  }
  const tableHeader = () => {
    return (
      <tr>
        <td>Request Id</td>
        <td>Full Name</td>
        <td>Company Name</td>
        <td>Status</td>
        <td>Created On</td>
      </tr>
    )
  }

  const table = (data) => {
    const { fullname, companyname, status, createdon } = data;
      return (
        <tr>
          <td>{1}</td>
          <td>{fullname}</td>
          <td>{companyname}</td>
          <td>{status}</td>
          <td>{createdon}</td>
          <td>{
              <Button text='Edit'
              color='green'
              handleClick={() => props.handleView(1)} />
            }
          </td>
          <td>{
              <Button text='Delete'
              color='red' 
              handleClick={props.handleDelete} />
          }</td>
        </tr>
      )
  }

  if (!props.loggedIn) {
    return <Redirect to='login' />
  } else {
    return (
      <div className='loan-page'>
        <div className='loan-page-content'>
          <div className='loan-page-header'>
            <h4>Welcome {props.user} </h4>
            <Button
            text='Make a loan request'
            width='180px'
            height='40px'
            color='orangered'
            handleClick={() => clickRouting('createloanrequest')} />
          </div>
        </div>
        <div className='loan-page-body'>
          {tableHeader()}
          {props.newRequest && table(props.newRequest)}
        </div>
      </div>
    )
  }  
}

const mapStateToProps = (state) => {
  const { loanRequesting, newRequest } = state.request;
  const { loggedIn } = state.user;
  console.log(loanRequesting, newRequest)
  return {
    loggedIn,
    loanRequesting,
    newRequest
  }
 }

export default connect(mapStateToProps, {})(UserLoanPage) ;