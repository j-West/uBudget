import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router'

export default function(ComposedComponent) {
  class RequireAuth extends Component {

    checkAuth() {
      if(this.props.authenticated) {
        return <ComposedComponent {...this.props} />
      } else {
        return <Redirect to='/signin' />
      }
    }

    render() {
      return this.checkAuth()
    }
  }

  function mapStateToProps(state) {
    return { authenticated : state.auth.authenticated };
  }

  return connect(mapStateToProps)(RequireAuth);
}
