import React from 'react';
import Button from '../ReusableComponents/Button';
import { Link } from 'react-router-dom'

const LoginForm = (props) => {
  return(
    <div className='form-container-div'>
      <div className='form-container-wide'>
        <div className='heading'>
          <h4>Login</h4>
        </div>
        <form onSubmit={props.handleSubmit}>
          <div className='input-control login'>
            <input type='email' name='email' placeholder='Email address' onChange={props.handleChange} className='form-contro' required />
            <input type='password' name='password' placeholder='Password' onChange={props.handleChange} className='form-contro' required />
          </div>
          <div className='input-control'>
            <Button 
            text='Login'
            width='150px'
            height='40px'
            color='#A40505' />
          </div>
        </form>
        <div className='input-control'>Don't have an account yet?<Link to='signup'>Create an account</Link></div>
      </div>
    </div>
  )
}

export default LoginForm;
