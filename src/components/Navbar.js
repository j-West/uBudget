import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class Navbar extends Component {

    renderLinks() {
      if(this.props.authenticated) {
        return [
          <li className="nav-item" key={1}>
            <Link className="nav-link" to="/profile">Profile</Link>
          </li>,
          <li className="nav-item" key={2}>
            <Link className="nav-link" to="/signout">Sign Out</Link>
          </li>
        ]
      } else {
        return [
          <li className="nav-item" key={1}>
            <Link className="nav-link" to="/signin">Sign In</Link>
          </li>,
          <li className="nav-item" key={2}>
            <Link className="nav-link" to="/signup">Register</Link>
          </li>
        ]
      }

    }
  render() {
    return (
      <div className='bottom-margin-5 no-gutter'>
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle   navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand" to="/">uBudget</Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/features">Features</Link>
              </li>
              { this.renderLinks() }
            </ul>
            <span className="navbar-text">
              Let uBudget help keep your spending in check!
            </span>
          </div>
        </nav>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(Navbar)
