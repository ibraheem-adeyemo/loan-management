import React from 'react';
import Button from '../ReusableComponents/Button';

const DashboardTable = (props) => {
  const tableHeader = () => {
    return (
      <tr>
        <td>Request Id</td>
        {props.userData.isAdmin && <td>Requester Name</td>}
        <td>Status</td>
        <td>Updated On</td>
      </tr>
    )
  }

  const requestDashboardTable = () => {
    return props.users.map((user, index) => {
      const { name, loanRequest: { requestId, status, updatedOn } } = user;
      return (
        <tr key={index}>
          <td>{requestId}</td>
          {props.userData.isAdmin && <td>{name}</td>}
          <td>{status}</td>
          <td>{updatedOn}</td>
          <td>{
              <Button text='Edit'
              color='green'
              handleClick={() => props.handleView(requestId)} />
            }
          </td>
          <td>{
              <Button text='Delete'
              color='red' 
              handleClick={props.handleDelete} />
          }</td>
        </tr>
      )
    })
  }
  return (
    <div className='request-loan-table'>
      <h3>Manage Loan Requests</h3>
      <div className='table-div'>
        <table id='loanRequest'>
          <tbody>
            {tableHeader()}
            { requestDashboardTable() }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DashboardTable;
