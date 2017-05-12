import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { LineChart, PieChart, AreaChart } from 'react-chartkick';

import { getUserBudgets } from '../actions'

class Chart extends Component {
  componentDidMount() {
    this.props.getUserBudgets()
  }

  displayBudgets() {
    console.log(this.props)
    return _.map(this.props.budgets, budget => {
      return (
      <li key={budget._id}>
        {budget.month}
      </li>
      )
    })
  }


  render() {

//       let data = [
//   {"name":"Workout", "data": {"2013-02-10 00:00:00 -0800": 3, "2013-02-17 00:00:00 -0800": 4}},
//   {"name":"Call parents", "data": {"2013-02-10 00:00:00 -0800": 5, "2013-02-17 00:00:00 -0800": 3}}
// ];


        return  (
          <div>
            <ul>
              {this.displayBudgets()}
            </ul>
            {/*<AreaChart data={data} />*/}
          </div>
      )}

 }

 function mapStateToProps(state) {
  return { budgets: state.budgets }
}

export default connect(mapStateToProps, { getUserBudgets })(Chart)
