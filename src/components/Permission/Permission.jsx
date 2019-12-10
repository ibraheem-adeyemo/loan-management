import React from 'react';
import Button from '../ReusableComponents/Button';
import './permission.css';
import { useHistory } from 'react-router-dom';
import { changeUserToAdmin } from '../../stores/Users/userAction';
import { connect } from 'react-redux';

const Permission = (props) => {
  const history = useHistory()
  const handleClick = (route) => {
    history.push(`/${route}`)
  }
  const handleAdminClick = (route) => {
    props.changeUserToAdmin()
    handleClick(route)
  }
  return (
    <div className='permission-div'>
      <div className='permission'>
        <p>Sorry, <strong>ONLY</strong> an admin can manage all loan requests while normal user can only manage his/ her own request</p>
        <div className='permission-button'>
          <Button
          text='Am an admin'
          width='150px'
          height='40px'
          color='green'
          handleClick={() => handleAdminClick('loanrequestdashbord')} />
          <Button
          text='Not an admin'
          width='150px'
          height='40px'
          color='orangered'
          handleClick={() => handleClick('userloanpage')} />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  const { user } = state.user;
  return {
    user
  }
}

const action = {
  changeUserToAdmin
}

export default connect(mapStateToProps, action)(Permission);
