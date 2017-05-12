import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LineChart, PieChart, AreaChart } from 'react-chartkick';

import { getUserBudgets } from '../actions'

class Chart extends Component {
  render() {
    let data = [
  {"name":"Workout", "data": {"2013-02-10 00:00:00 -0800": 3, "2013-02-17 00:00:00 -0800": 4}},
  {"name":"Call parents", "data": {"2013-02-10 00:00:00 -0800": 5, "2013-02-17 00:00:00 -0800": 3}}
];


        return  (
          <div>

            <AreaChart data={data} />

          </div>
      )}

 }

export default connect(null)(Chart)
