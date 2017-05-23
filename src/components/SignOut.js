import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUserOut } from '../actions'
import Navbar from './Navbar'

class SignOut extends Component {
  componentWillMount() {
    this.props.signUserOut()
  }

  render() {
    return (
      <div>
        <Navbar />
        Sorry to see you go, Thanks for using uBudget!

      </div>
  )}
}

export default connect(null, { signUserOut })(SignOut)
