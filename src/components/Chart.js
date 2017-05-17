import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { LineChart, PieChart, AreaChart } from 'react-chartkick';
import { getUserBudgets } from '../actions'

class Chart extends Component {


  displayBudgets() {
console.log(`budget:`, budget);
    return _.map(this.props.budgets, budget => {
      return (
      <li key={budget._id}>
        <p>{budget.month}</p>
        {budget.expenses.map(expense => <p>{expense}</p>)}
      </li>
      )
    })
  }


  render() {
    console.log(`this.props:`, this.props);
 // let data = [
 //   {"name":"Workout", "data": {"2013-02-10 00:00:00 -0800": 3, "2013-02-17 00:00:00 -0800": 4}},
 //   {"name":"Call parents", "data": {"2013-02-10 00:00:00 -0800": 5, "2013-02-17 00:00:00 -0800": 3}}
 // ];

    if(this.props.budget) {
      return (
        <div>
          <ul>
            <li>{ this.props.userId }</li>
            <li>{ this.props.budgets }</li>
          </ul>


        </div>
      )
    }

    return  (
      <div>
        <ul>
          <li>{ this.props.userId }</li>
          <li>{ this.props.budgets }</li>
        </ul>


      </div>
      )}
 }

 function mapStateToProps(state) {
console.log(`state:`,);
  return {
    budgets: state.userBudgets.budgets,
    userId: state.auth.userId
  }
}

export default connect(mapStateToProps, {getUserBudgets})(Chart)
