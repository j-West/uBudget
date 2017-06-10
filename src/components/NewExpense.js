import React, { Component } from 'react'
import { Field, reduxForm, resetForm } from 'redux-form'
import { connect } from 'react-redux'
import { addExpense } from '../actions'
import '../style.css'

class NewExpense extends Component {

  renderField(field) {
    const { meta: { touched, error }} = field
    const divClassNames = `form-group flex-container-child ${ touched && error ? 'text-danger' : ''}`

    return (
      <div className={ divClassNames }>
        <label>{ field.label }</label>
        <input
          type="text"
          className="form-control"
          { ...field.input }
        />
        <div className='text-danger'>
          { touched ? error : ' '}
        </div>
      </div>
    )
  }

  renderSelect(field) {
    console.log(`field:`, field);
    const { meta: { touched, error }} = field
    const divClassNames = `form-group flex-container-child ${ touched && error ? 'text-danger' : ''}`
    return (
      <div className={ divClassNames}>
        <label>{ field.label }</label>
        <select
          className='form-control'
          {...field.input }>
          <option value="">Select a budget...</option>
          { field.budgets.map(budgetName => {
            budgetName = budgetName[0].toUpperCase() + budgetName.substr(1)
              return (
                <option value={ budgetName } key={ budgetName }>{ budgetName }</option>
              )
            })
            }
        </select>
        <div className='text-danger'>
            { touched ? error : ' '}
          </div>
        </div>
      )
    }




  onSubmit(values) {
    this.props.addExpense(values)
    this.props.reset()
  }

  render() {

    const { handleSubmit } = this.props
    console.log(`initialValues:`, this.props.budgets);
    return (
        <div className='col-lg-5 ml-3'>
          <h2 className='text-center'>Add New Expense</h2>
          <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
            <Field
              label='Expense Amount'
              name='expense'
              component={ this.renderField }
            />
            <Field
              label='Select a Budget'
              name='month'
              component={ this.renderSelect }
              budgets= { this.props.budgets }
            />
            <Field
              label='Type of Purchase'
              name='category'
              component={this.renderField}
            />
            <button type='submit' className='btn small-btn btn-success mb-2'>Add Expense</button>
          </form>
      </div>
    )
  }
}


function validate(values) {
  const errors = {}

  if (!values.expense || !/^[0-9.]+$/.test(values.expense)) {
    errors.expense = "Please enter a dollar amount.  Examples: 45 or 45.00."
  }

  if (!values.month) {
    errors.month = "Please select the month you want to add this expense to."
  }

  if (!values.category || !/^[a-zA-Z]+$/.test(values.category)) {
    errors.category = "Please enter only letters."
  }

  return errors
}


export default reduxForm({
  validate,
  form: 'AddNewExpense'
})(
  connect(null, { addExpense })(NewExpense))
