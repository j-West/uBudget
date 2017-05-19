import React, { Component } from 'react'
import { PieChart } from 'react-chartkick'

import Navbar from './Navbar'
import LoginForm from './LoginForm'


export default class Home extends Component {

  render() {

    return (
      <div>
        <Navbar />
          <h1 className='text-center display-1'>uBudget</h1>
          <h4 className='text-center'>Register today and start seeing how much you spend on what!</h4>
          <div className="flex-container-budget mt-3">
            <PieChart className='text-center' data={[["Gas", 3], ["Bill", 8], ["Food", 5]]} />
            <PieChart className='' data={[["Gas", 5], ["Bill", 5], ["Food", 6]]} />
            <PieChart className='' data={[["Gas", 7], ["Bill", 4], ["Food", 5]]} />
          </div>
      </div>
    )
  }
}
