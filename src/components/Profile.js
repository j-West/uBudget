import React, { Component } from 'react'
import { Field,  reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import _ from 'lodash'
import { getUserBudgets } from '../actions'

import Navbar from './Navbar'
import Chart from './Chart'
import NewExpense from './NewExpense'
import NewBudget from './NewBudget'


class Profile extends Component {


  render() {

    let budgetNames = _.map(this.props.budgets, budget => {
      return budget.budgetName
    })

    return (
      <div>
        <Navbar />
        <NewExpense budgets={ budgetNames } />
        <NewBudget budgets={ budgetNames } />
        <Chart budgets={this.props.budgets} />
      </div>
    )
  }
}

const mapStateToProps = state => {
 return {
   budgets: state.userBudgets.budgets
 }
}

export default connect(mapStateToProps)(Profile)
