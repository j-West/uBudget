import React, { Component } from 'react'
import { PieChart } from 'react-chartkick'

export default class HomeDeatils extends Component {
  render() {
    return (
        <div className="flex-container-budget">
          <PieChart data={[["Gas", 3], ["Bill", 8], ["Food", 5]]} />
          <PieChart data={[["Gas", 5], ["Bill", 5], ["Food", 6]]} />
          <PieChart data={[["Gas", 7], ["Bill", 4], ["Food", 5]]} />
        </div>
    )
  }
}
