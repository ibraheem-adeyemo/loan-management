import React, {useState} from 'react';
import DashboardTable from './DashboardTable'
import { userDetails } from '../../data/users';
import UserModal from '../UserModal/UserModal';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './dashboardTable.css'


const DashboardTableComponent = (props) => {
  const [state, setstate] = useState({
    viewClicked: false
  })
  const getRequestDetails = (id) => {
    return userDetails.find((user) => user.loanRequest.requestId === id)
  }
  const handleView = (id) => {
    const requestDetails = getRequestDetails(id)
    setstate({
      ...state,
      user: requestDetails,
      viewClicked: true
    })
    const userModal = document.getElementById('user-modal');
    userModal.style.display = 'block';
  } 
  if (!props.isAdmin) {
    return <Redirect to='permission' />
  }
  return (
    <div className='dashboard-table'>
      <DashboardTable 
      users={userDetails}
      userData={{isAdmin: true}}
      handleView={handleView} />
      <div className='modal-div'>
        {
          state.viewClicked && <UserModal user={state.user} />
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { isAdmin } = state.user
  return {
    isAdmin
  }
}

export default connect(mapStateToProps, {})(DashboardTableComponent) ;
