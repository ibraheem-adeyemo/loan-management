import React, { useState, useEffect} from 'react';
import LoanRequestForm from './LoanRequestForm/LoanRequestForm';
import SideContent from './SideContent/SideContent';
import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { requestLoanAction } from '../stores/requestLoan/requestLoanAction'

const CreateLoanRequest = (props) => {
  const [state, setstate] = useState({});
  const [loan, setLoan] = useState({});

  useEffect(() => {
    axios.get("https://city-api.herokuapp.com/?countries=true")
    .then(response => {
      if (response.status === 200) {
        setstate({
          ...state,
          countries: response.data.countries
        })
      }
    })
  }, [])
  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    if(selectedCountry.length > 0) {
      axios.get("https://city-api.herokuapp.com/?country="+selectedCountry)
      .then(response => {
        if(response.status === 200) {          
          setstate({
            ...state,
            country: selectedCountry,
            cities: response.data.cities
          })
        }
      })
    } else {
      setstate({
        ...state,
        cities:[]
      })
    }
  }
  const handleChange = (e) => {
    setLoan({
      ...loan,
      status: 'Pending',
      createdon: '11/12/2019',
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createRequest(loan);
  }
  if (props.newRequest) {
    return <Redirect to='userloanpage' />
  } else if (!props.loggedIn) {
    return <Redirect to='login' />
  } else if (props.loanRequsting) {
    return <h3>Please wait .............</h3>
  } else {
    return (
      <div className='create-loan-page'>        
        <SideContent />
        <LoanRequestForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        countries={state.countries}
        state={state.state}
        localgovernments={state.localgovernment}
        handleCountryChange={handleCountryChange}
        handleCountryChange={handleCountryChange}
        contryStates={state.cities}
        loanRequsting={props.loanRequsting} />
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

const action = {
  createRequest: requestLoanAction
}

export default connect(mapStateToProps, action)(CreateLoanRequest);
