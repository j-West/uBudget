import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import '../style.css'
// import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';



class Navbar extends Component {

    renderLinks() {
      if(this.props.authenticated) {
        return [
          <li className="nav-item" key={1}>
            <Link className="nav-link white-text" to="/profile">Profile</Link>
          </li>,
          <li className="nav-item" key={2}>
            <Link className="nav-link white-text" to="/signout">Sign Out</Link>
          </li>
        ]
      } else {
        return [
          <li className="nav-item" key={1}>
            <Link className="nav-link white-text" to="/signin">Sign In</Link>
          </li>,
          <li className="nav-item" key={2}>
            <Link className="nav-link white-text" to="/signup">Register</Link>
          </li>
        ]
      }

    }
  render() {
    return (
      <div className='no-gutter'>
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle   navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand white-text" to="/">uBudget</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              { this.renderLinks() }
            </ul>
            <span className="navbar-text white-text">
              Let uBudget help you keep track of your spending!
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
