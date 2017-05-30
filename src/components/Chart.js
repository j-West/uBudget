import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { PieChart } from 'react-chartkick';
import { getUserBudgets } from '../actions'
import '../style.css'

export default class Chart extends Component {

  ChartDataHelper(expenses) {
    let data = {}
    expenses.map(({category, expense}) => {
      category = category[0].toUpperCase() + category.substr(1)
      data[category] = expense
    })
    return data

  }

  formatBudgets() {
    let months = _.map(this.props.budgets, budget => {
      let data = this.ChartDataHelper(budget.expenses)
      return {
        "month" : budget.budgetName,
        "data" : data
      }
    })
     return this.displayCharts(months)

  }

  displayCharts(months) {
    return months.map(({ month, data}) => {
      month = month[0].toUpperCase() + month.substr(1)
        return (
          <div key={month} className='col-md-4 inlineDiv'>
            <h3 className='text-center'>{month}</h3>
            { _.isEmpty(data) ? <h6 className='text-center'>Add an expense to populate {month}s chart</h6> : <PieChart data={data} label={month} /> }
           </div>
        )
      })
  }

  showInstructions() {
    return (
      <div>
        <h3>Thank you for registering with uBudget!</h3>
        <p>To get started, create a new budget by entering a name for the budget and clicking the "Create Budget" button.</p>
        <p>After creating a budget, you can start adding expenses to it by entering the amount your spent, the budget you wish to add the expense to, and the category of the expense.</p>
      </div>
    )
  }


  render() {
    console.log(`this.props.budget:`, this.props.budget);

    return  (
      <div className='bottom-margin-5 mt-2'>
          { _.isEmpty(this.props.budgets) ? this.showInstructions() : this.formatBudgets() }
      </div>
      )}
 }
