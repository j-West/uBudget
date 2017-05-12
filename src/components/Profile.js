import React, { Component } from 'react'
import { Field,  reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { addExpense } from '../actions'

import Navbar from './Navbar'
import Chart from './Chart'
import NewExpense from './NewExpense'


export default class Profile extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Chart />
        <NewExpense type='Expense'/>
      </div>
    )
  }
}
