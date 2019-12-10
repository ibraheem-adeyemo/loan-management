import React from 'react';
import Button from '../ReusableComponents/Button';
import { FiEdit3 } from 'react-icons/fi'
import './userModal.css';

const UserModal = (props) => {
  const removeDisabled = (id) => {
    const disabledInputs = document.getElementById(id);
      disabledInputs.disabled = false;
      disabledInputs.focus()
  }
  const closeModal = () => {
    const userModal = document.getElementById('user-modal');
    userModal.style.display = 'none';
  }
  return(
    <div id='user-modal' className='user-modal'>
      <div className='user-modal-div'>
        <div className='close-modal-button'>
          <Button text='X'
          color='grey'
          width={50}
          handleClick={closeModal} />
        </div>
        <div className='user-modal-body'>
          <div className='user-modal-body-left'>
            <div className='user-img'>
              <img src={props.user.image} alt='user image' />
            </div>
            <div className='info'>
              <div className=''>
                <li>{props.user.name}</li>
                <li>{props.user.stateOfOrigin} State</li>
                <li>{props.user.phone}</li>
                <li>{props.user.emailAddress}</li>
              </div>
            </div>
          </div>
          <div className='user-modal-body-right'>
            <div className='modal-body-right'>
              <li>
                <div className='label'>User Id:</div>
                <input type='text' id='user-id' placeholder={props.user.userId} onChange={props.handleChange} className='modal-input' disabled />
                <button className='input-icon-button' onClick={() => removeDisabled('user-id')}>
                  <FiEdit3 />
                </button>
              </li>
              <li>
                <div className='label'>Company Name:</div>
                <input type='text' id='company-name' placeholder={props.user.loanRequest.companyName} onChange={props.handleChange} className='modal-input' disabled />
                <button className='input-icon-button' onClick={() => removeDisabled('company-name')}>
                  <FiEdit3 />
                </button>
              </li>
              <li>
                 
                <div className='label'>Name:</div>
                <input type='text' id='name' placeholder={props.user.name} onChange={props.handleChange} className='modal-input' disabled />
                <button className='input-icon-button' onClick={() => removeDisabled('name')}>
                  <FiEdit3 />
                </button>
              </li>
              <li>                 
                <div className='label'>Company Address:</div>
                <input type='text' id='company-address' placeholder={props.user.loanRequest.companyAddress} onChange={props.handleChange} className='modal-input' disabled />
                <button className='input-icon-button' onClick={() => removeDisabled('company-address')}>
                  <FiEdit3 />
                </button>
              </li>
              <li>
                <div className='label'>Phone: </div>
                <input type='text' id='phone' placeholder={props.user.phone} onChange={props.handleChange} className='modal-input' disabled />
                <button className='input-icon-button' onClick={() => removeDisabled('phone')}>
                  <FiEdit3 />
                </button>
              </li>
              <li>
                <div className='label'>State of Origin: </div>
                <input type='text' id='st-of-origin' placeholder={props.user.stateOfOrigin} onChange={props.handleChange} className='modal-input' disabled />
                <button className='input-icon-button' onClick={() => removeDisabled('st-of-origin')}>
                  <FiEdit3 />
                </button>
              </li>
              <li>
                <div className='label'>LG of Origin: </div>
                <input type='text' id='lg-of-origin' placeholder={props.user.lgOfOrigin} onChange={props.handleChange} className='modal-input' disabled />
                <button className='input-icon-button' onClick={() => removeDisabled('lg-of-origin')}>
                  <FiEdit3 />
                </button>
              </li>
              <li>
                <div className='label'>Amount borrowed: </div>
                <input type='text' id='amount' placeholder={props.user.loanRequest.amount} className='modal-input' disabled />
              </li>
              <li>
                <div className='label'>Amount Paid: </div>
                <input type='text' id='amount-paid' placeholder={props.user.loanRequest.amountPaid} className='modal-input' disabled />
              </li>
              <li>
                <div className='label'>Remaining Balance: </div>
                <input type='text' id='amount' value={props.user.loanRequest.amount - props.user.loanRequest.amountPaid} className='modal-input' disabled />
              </li>
              <li>
                <div className='label'>Email address: </div>
                <input type='text' id='amount' placeholder={props.user.emailAddress} onChange={props.handleChange} className='modal-input' disabled />
                <button className='input-icon-button' onClick={() => removeDisabled('amount')}>
                  <FiEdit3 />
                </button>
              </li>
              {
                props.isAdmin && (
                  <li>
                    <div className='label'>Status: </div>
                    <select className='modal-input' onChange={props.handleChange}>
                      <option value='active'>Active</option>
                      <option value='rejected'>Rejected</option>
                      <option value='accepted'>Accepted</option>
                      <option value='setled'>Payment Complete</option>
                    </select>
              </li>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserModal;
