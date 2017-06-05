import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { signInUp } from '../actions'

import Navbar from './Navbar'

class SignIn extends Component {


  renderField(field) {


    const { meta: { touched, error }} = field

    const divClassNames = `form-group ${ touched && error ? 'text-danger' : ''}`
    return (
      <div className={ divClassNames }>
        <label>{ field.label }</label>
        <input
          type={ field.label === 'Password' ? 'password' : 'text' }
          className="form-control col-7"
          { ...field.input }
        />
        <div className='text-danger'>
          { touched ? error : ' '}
        </div>
      </div>
    )
  }

  onSubmit(values) {
    this.props.signInUp(values, 'signin')
}

renderAlert() {
  if(this.props.authenticated) {
    return <Redirect to='/profile' />
  }

  if(this.props.errorMessage) {
    return (
      <div className='alert alert-danger text-center'>
        <strong>
          {this.props.errorMessage}
        </strong>
      </div>
    )
  }
}


  render() {

    const { handleSubmit } = this.props

    return (
      <div>
        <Navbar />
          <form className='col-lg-4' onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
            <Field
              label="Email"
              name='email'
              component={ this.renderField }
            />
            <Field
              label='Password'
              name='password'
              component={ this.renderField }
            />
            {this.renderAlert()}
            <button type='submit' className='btn'>Submit</button>
          </form>
    </div>
    )
  }
}


function validate(values) {
  const HTML5_EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  const errors = {}

  if (!HTML5_EMAIL_REGEX.test(values.email)) {
    errors.email = "Please enter a valid email"
  }

  if (!values.password) {
    errors.password = "Please enter your password"
  }

  return errors
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.authenticated,
    errorMessage: state.auth.error
  }
}


export default reduxForm({
  validate,
  form: 'UserLoginForm'
})(
  connect(mapStateToProps, { signInUp })(SignIn))
