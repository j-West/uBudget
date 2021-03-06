import React, { Component } from 'react'
import { PieChart } from 'react-chartkick'
import '../style.css'

import Navbar from './Navbar'


export default class Home extends Component {

  render() {

    return (
      <div>
        <Navbar />
          <h1 className='text-center display-1 mb-3 top-margin-5'>uBudget</h1>
          <h4 className='text-center bottom-margin-5'>Register today and start seeing how much you spend on what!</h4>
          <div className="mt-3 show-large">
            <PieChart data={[["Car", 3], ["Bills", 8], ["Food", 5]]} />
            <PieChart data={[["Gas", 5], ["Kids", 5], ["Rent", 6], ["Pet", 3]]} />
            <PieChart data={[["Gas", 7], ["Bill", 4], ["Food", 5]]} />
          </div>
          <div className="mt-3 show-small">
            <PieChart data={[["Gas", 5], ["Kids", 5], ["Rent", 6], ["Pet", 3]]} />
          </div>
      </div>
    )
  }
}
