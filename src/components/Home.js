import React, { Component } from 'react'

import Navbar from './Navbar'
import LoginForm from './LoginForm'
import HomeDetails from './HomeDetails'


export default class Home extends Component {

  render() {

    return (
      <div>
        <Navbar />
          <h1 className='text-center display-1'>uBudget</h1>
        <div className='row'>
          <HomeDetails />
        </div>
      </div>
    )
  }
}
