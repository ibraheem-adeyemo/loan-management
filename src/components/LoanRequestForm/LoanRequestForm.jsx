import React from 'react';
import './loanRequestForm.css'

const LoanRequestForm = (props) => {
  return (
    <div className='local-container loan-requst-form'>
      <div className='form-container'>
        <div className='heading'>
          <h4>
            <strong>
              Create Loan Request
            </strong>
          </h4>
        </div>
        <form onSubmit={props.handleSubmit}>
          <div className='input-row'>
            <div className='label' htmlFor='email'>
              Email
            </div>
            <input type='email' name='email' placeholder='Email addrress' onChange={props.handleChange} />
          </div>
          <div className='input-row'>
            <div className='label' htmlFor='email'>
              Full Name
            </div>
            <input type='text' name='fullname' placeholder='Full name' onChange={props.handleChange} />
          </div>
          <div className='input-row'>
            <div className='label' htmlFor='email'>
              Company Name
            </div>
            <input type='text' name='companyname' placeholder='Company name' onChange={props.handleChange} />
          </div>
          <div className='input-row'>
            <div className='label' htmlFor='email'>
              Nationality
            </div>
            <select className='form-control' name='email' onChange={props.handleCountryChange} >
              <option>Nationality</option>
              {
                props.countries && props.countries.map((nationality, i) => {
                return (<option value={nationality} key={i}>{nationality}</option>)
                })
              }
            </select>
          </div>
          <div className='input-row'>
            <div className='label' htmlFor='email'>
              State of Origin
            </div>
            <select className='form-control' name='email' onChange={props.handleChange} >
              <option>State of Origin</option>
              {
                props.contryStates && props.contryStates.map((state, i) => {
                return (<option value={state} key={i}>{state}</option>)
                })
              }
            </select>
          </div>
          <div className='input-row'>
            <div className='label' htmlFor='email'>
              LG of Origin
            </div>
            <input type='text' name='lg-of origin' placeholder='LG of Origin' onChange={props.handleChange} />
          </div>
          <div className='input-row'>
            <div className='label' htmlFor='email'>
              State of Residence
            </div>
            <select className='form-control' name='email' onChange={props.handleChange} >
              <option>State of Residence</option>
              {
                props.contryStates && props.contryStates.map((state, i) => {
                return (<option value={state} key={i}>{state}</option>)
                })
              }
            </select>
          </div>
          <div className='input-row'>
            <div className='label' htmlFor='email'>
              LG of Residence
            </div>
            <input type='text' name='lgofresidence' placeholder='LG of Residence' onChange={props.handleChange} />
          </div>
          <div className='input-row'>
            <div className='label' htmlFor='email'>
              Pictures and Utility bill
            </div>
            <input type='file' name='pictureOrUtilityBill' className='form-file-control' placeholder='Email addrress' onChange={props.handleChange} />
            <input type='file' name='pictureOrUtilityBill2' className='form-file-control' placeholder='Email addrress' onChange={props.handleChange} />
          </div>
          <div className='input-row'>
            <div className='label' htmlFor='email'>
              Means of identity front and back
            </div>
            <input type='file' name='Identity1' className='form-file-control' placeholder='Email addrress' onChange={props.handleChange} />
            <input type='file' name='Identity2' className='form-file-control' placeholder='Email addrress' onChange={props.handleChange} />
          </div>
          <div className='input-row'>
            <div className='label' htmlFor='email'>
              Business Certificate and Colateral
            </div>
            <input type='file' name='certificateAndColateral' className='form-file-control' placeholder='Email addrress' onChange={props.handleChange} />
            <input type='file' name='certificateAndColateral2' className='form-file-control' placeholder='Email addrress' onChange={props.handleChange} />
          </div>
          <div className='input-row request-button-div'>
            <button className='loan-request-button'>Create request</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoanRequestForm;
