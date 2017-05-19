import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { createBudget } from '../actions'

class NewBudget extends Component {



  renderField(field) {
    const { meta: { touched, error }} = field
    const divClassNames = `form-group flex-container-child ${ touched && error ? 'text-danger' : ''}`

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
    this.props.createBudget(values)
    this.props.reset()
  
  }


  render() {

    const { handleSubmit } = this.props

    return (
      <div>

        <form className='flex-container-budget' onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
          <Field
            label='Budget'
            name='budgetName'
            component={ this.renderField }
          />
          <button type='submit' className='btn'>Create Budget</button>
        </form>
    </div>
    )
  }
}

function validate(values) {

  const errors = {}

  if (!values.budgetName) {
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
