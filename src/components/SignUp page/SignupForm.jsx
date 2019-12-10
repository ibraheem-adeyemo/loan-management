import React from 'react';
import Button from '../ReusableComponents/Button';
import { Link } from 'react-router-dom'
import './signup.css';

const SignupForm = (props) => {
  return(
    <div className='form-container-div'>
      <div className='form-container-wide'>
        <div className='heading'>
          <h4>Sign Up</h4>
        </div>
        <form onSubmit={props.handleSubmit}>
          <div className='input-control'>
            <input type='text' name='firstname' placeholder='firstname' onChange={props.handleChange} className='form-contro' required />
            <input type='text' name='lastname' placeholder='lastname' onChange={props.handleChange} className='form-contro' required />
          </div>
          <div className='input-control'>
            <input type='email' name='email' placeholder='Email address' onChange={props.handleChange} className='form-contro' required />
            <input type='password' name='password' placeholder='Password' onChange={props.handleChange} className='form-contro' required />
          </div>
          <div className='input-control'>
            <input type='phone' name='phone' placeholder='Phone Number' onChange={props.handleChange} className='form-contro' required />
            <select name='state' onChange={props.handleChange} className='form-contro'>
              <option>State</option>
              {
                props.countryStates && props.countryStates.map((state, index) => {
                return <option value={state} key={index}>{state}</option>
                })
              }
            </select>
          </div>
          <div className='input-control'>
            <Button 
            text='Sign Up'
            width='150px'
            height='40px'
            color='#A40505' />
          </div>
        </form>
        <div className='input-control'>Already have an account?<Link to='login'>Login</Link></div>
      </div>
    </div>
  )
}

export default SignupForm;
