import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { tryLogin } from '../actions'

class LoginForm extends Component {

  renderField(field) {
    const { meta: { touched, error }} = field

    const divClassNames = `form-group ${ touched && error ? 'text-danger' : ''}`
    return (
      <div className={ divClassNames }>
        <label>{ field.label }</label>
        <input
          type="text"
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
    console.log('values', values)
    this.props.tryLogin(values, () => {
      console.log('redirect to profile page or something', values)
    })
  }

  render() {

    const { handleSubmit } = this.props

    return (
        <div className='col-lg-4'>
          <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
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
            <button type='submit' className='btn'>Login</button>
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

export default reduxForm({
  validate,
  form: 'UserLoginForm'
})(
  connect(null, { tryLogin })(LoginForm)
)
