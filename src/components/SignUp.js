import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { signInUp } from '../actions'

import Navbar from './Navbar'


class Signup extends Component {

  renderField(field) {


    const { meta: { touched, error }} = field

    const divClassNames = `form-group ${ touched && error ? 'text-danger' : ''}`
    return (
      <div className={ divClassNames }>
        <label>{ field.label }</label>
        <input
          type={ field.label === 'Email' ? 'text' : 'password' }
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
    this.props.signInUp(values, 'signup')
}

renderAlert() {
  if(this.props.errorMessage) {
    return (
      <div className='alert alert-danger text-center'>
        <strong>
          {this.props.errorMessage}
        </strong>
      </div>
    )
  }
  else if(this.props.authenticated) {
    return <Redirect to='/profile' />
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
          <Field
            label='Confirm Password'
            name='confirmPassword'
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

  if(values.password !== values.confirmPassword) {
    errors.confirmPassword = "The passwords you entered do not match"
  }

  return errors
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated,
    errorMessage: state.auth.error
  }
}

export default reduxForm({
  validate,
  form: 'SignUp'
})(
  connect(mapStateToProps, { signInUp })(Signup))
