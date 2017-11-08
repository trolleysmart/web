// @flow

import * as userAccessActions from 'micro-business-parse-server-common-web/dist/userAccess/Actions';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SignIn from './SignIn';

class SignInContainer extends Component {
  handleSignInWithUsernameAndPassword = values => {
    this.props.userAccessActions.signInWithUsernameAndPassword(values.email, values.password);
  };

  handleCancel = () => {};

  render = () => <SignIn onSubmit={this.handleSignInWithUsernameAndPassword} handleCancel={this.handleCancel} />;
}

SignInContainer.propTypes = {
  userAccessActions: PropTypes.object.isRequired,
  signInStatus: PropTypes.number.isRequired,
};

function mapStateToProps(state) {
  return {
    signInStatus: state.userAccess.get('signInStatus'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userAccessActions: bindActionCreators(userAccessActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
