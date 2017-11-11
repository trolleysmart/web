// @flow

import { UserAccessStatus } from 'micro-business-parse-server-common-web';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRoute = ({ userExists, getCurrentUserStatus, ...props }) => {
  if (getCurrentUserStatus === UserAccessStatus.IN_PROGRESS) {
    return <div />;
  }

  return userExists ? <Route {...props} /> : <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />;
};

PrivateRoute.propTypes = {
  userExists: PropTypes.bool.isRequired,
  getCurrentUserStatus: PropTypes.number.isRequired,
};

function mapStateToProps(state) {
  return {
    userExists: state.userAccess.get('userExists'),
    getCurrentUserStatus: state.userAccess.get('getCurrentUserStatus'),
  };
}

export default connect(mapStateToProps)(PrivateRoute);
