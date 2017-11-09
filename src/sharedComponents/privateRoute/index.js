// @flow

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, userExists, ...rest }) => (
  <Route
    {...rest}
    render={props => (userExists ? <Component {...props} /> : <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />)}
  />
);

PrivateRoute.propTypes = {
  userExists: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    userExists: state.userAccess.get('userExists'),
  };
}

export default connect(mapStateToProps)(PrivateRoute);
