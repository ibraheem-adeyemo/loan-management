import React from 'react';
import Button from '../ReusableComponents/Button';
import { useHistory } from 'react-router-dom';
import { IoIosPersonAdd } from 'react-icons/io'
import { GiReceiveMoney, GiPayMoney } from 'react-icons/gi'

const HowItWorks = () => {
  let history = useHistory();
  const clickRouting = (page) => {
    history.push(`/${page}`)
  }
  return (
    <div>
      <div className='hw-div'>
        <div className='hw-div-heading'>
          <h2>
            <strong>
              How It Works
            </strong>
          </h2>
        </div>
        <div className='hw-div-body'>
          <div className='hw-div-body-entity'>
            <IoIosPersonAdd size='100px' />
            <h6>Create an account</h6>
            <Button
            width='150px'
            text='Create account'
            color='orangered'
            handleClick={() => clickRouting('createloanrequest')} />
          </div>
          <div className='hw-div-body-entity'>
            <GiReceiveMoney size='100px' />
            <h6>Request for loan</h6>
            <Button
            width='150px'
            text='Request for loan'
            color='orangered'
            handleClick={() => clickRouting('createloanrequest')} />
          </div>
          <div className='hw-div-body-entity'>
            <GiPayMoney size='100px' />
            <h6>Get loan in less than 24 hours</h6>
            <Button
            width='150px'
            text='Manage account'
            color='orangered'
            handleClick={() => clickRouting('createloanrequest')} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks;
