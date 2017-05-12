import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { addExpense } from '../actions'

class NewExpense extends Component {

  renderField(field) {
    const { meta: { touched, error }} = field

    const divClassNames = `form-group ${ touched && error ? 'has-danger' : ''}`
    return (
      <div className={ divClassNames }>
        <label>{ field.label }</label>
        <input
          type="text"
          className="form-control col-7"
          { ...field.input }
        />
        <div className='text-help'>
          { touched ? error : ' '}
        </div>
      </div>
    )
  }

  onSubmit(values) {
    console.log('values', values)
    this.props.addExpense(values, () => {
      console.log('redirect to profile page or something', values)
    })
  }

  render() {

    const { handleSubmit } = this.props

    return (
        <div className='col-lg-4'>
          <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
            <Field
              label={ this.props.type }
              name={ this.props.type.toLowerCase() }
              component={ this.renderField }
            />
            <button type='submit' className='btn'>Add</button>
          </form>
      </div>
    )
  }
}


function validate(values) {
  const errors = {}

  if (!values.income || !values.expense) {
    errors.displayError = "Please enter an amount"
  }

  return errors
}

export default reduxForm({
  validate,
  form: 'AddNewExpense'
})(
  connect(null, { addExpense })(NewExpense)
)
