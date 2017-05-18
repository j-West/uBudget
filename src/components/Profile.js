import React, { Component } from 'react'
import { Field,  reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { addExpense } from '../actions'
import { getUserBudgets } from '../actions'

import Navbar from './Navbar'
import Chart from './Chart'
import NewExpense from './NewExpense'


class Profile extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <Chart budgets={this.props.budgets} />
        <NewExpense type='Expense' addExpense={this.props.addExpense()} />
      </div>
    )
  }
}

const mapStateToProps = state => {
 return {
   budgets: state.userBudgets.budgets,
   userId: state.auth.userId
 }
}

export default connect(mapStateToProps, { getUserBudgets, addExpense })(Profile)
