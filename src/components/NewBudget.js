import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { createBudget } from '../actions'
import '../style.css'

class NewBudget extends Component {



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

  onSubmit(values) {
    this.props.createBudget(values)
    this.props.reset()

  }


  render() {

    const { handleSubmit } = this.props

    return (
      <div className='col-lg-5 offset-lg-1'>
        <h2 className='text-center'>Add New Budget</h2>
        <form className='' onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
          <Field
            label='Budget'
            name='budgetName'
            component={ this.renderField }
          />
          <button type='submit' className='btn small-btn btn-success'>Create Budget</button>
        </form>
        <div className='mt-3'>
          <p>To get started, create a new budget by entering a name for the budget and clicking the "Create Budget" button.</p>
          <p>After creating a budget, you can start adding expenses to it by entering the amount you spent, the budget you wish to add the expense to, and the category of the expense.</p>
        </div>
    </div>
    )
  }
}

function validate(values) {

  const errors = {}

  if (!values.budgetName || !/^[a-zA-Z]+$/.test(values.budgetName)) {
    errors.budgetName = "Please enter a name for this budget."
  }

  return errors
}

export default reduxForm({
  validate,
  form: 'CreateBudget'
})(
  connect(null, { createBudget })(NewBudget)
)
