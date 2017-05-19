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
        <div className='new-expense-bg'>
          <form className='flex-container' onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
            <Field
              label='Expense'
              name='expense'
              component={ this.renderField }
            />
            <Field
              label='Please enter a budget name'
              name='month'
              component={this.renderField}
            />
            <Field
              label='Type of expense:'
              name='category'
              component={this.renderSelect}
            />
            <button type='submit' className='btn btn-success'>Add Expense</button>
          </form>
      </div>
    )
  }
}


function validate(values) {
  const errors = {}

  if (!values.expense) {
    errors.expense = "Please enter an amount."
  }

  if (!values.month) {
    errors.month = "Please enter the month you want to add this expense to."
  }

  if (!values.category) {
    errors.category = "Please enter the category of this expense."
  }

  return errors
}



export default reduxForm({
  validate,
  form: 'AddNewExpense'
})(
  connect(null, { addExpense })(NewExpense)
)
