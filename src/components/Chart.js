import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Link } from 'react-router'
import { PieChart, LineChart } from 'react-chartkick';
import { getUserBudgets } from '../actions'

export default class Chart extends Component {

  ChartDataHelper(expenses) {
    let data = {}
    expenses.map(({category, expense}) => {
      data[category] = expense
    })
    return data

  }

  formatBudgets() {
    // console.log(`this.props.budgets:`, this.props.budgets);
    let months = _.map(this.props.budgets, budget => {
      let data = this.ChartDataHelper(budget.expenses)
      return {
        "month" : budget.monthName,
        "data" : data
      }
    })
    console.log(`func1:`, months);
     return this.displayCharts(months)

  }

  displayCharts(months) {
    console.log(`func2:`, months);
    return months.map(({ month, data}) => {
        return (
          <div className='col-md-4'>
            <h3>{month}</h3>
            <PieChart data={data} label={month} />
           </div>
        )
      })
  }

  render() {

    return  (
      <div>

          { this.formatBudgets() }

      </div>
      )}
 }
