// @flow

import * as userAccessActions from 'micro-business-parse-server-common-web/dist/userAccess/Actions';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SignUp from './SignUp';

class SignUpContainer extends Component {
  handleSignUpWithUsernameAndPassword = values => {
    this.props.userAccessActions.signUpWithUsernameAndPassword(values.email, values.password, values.email, 'store');
  };

  handleCancel = () => {};

  render = () => <SignUp onSubmit={this.handleSignUpWithUsernameAndPassword} handleCancel={this.handleCancel} />;
}

SignUpContainer.propTypes = {
  userAccessActions: PropTypes.object.isRequired,
  signUpStatus: PropTypes.number.isRequired,
};

function mapStateToProps(state) {
  return {
    signUpStatus: state.userAccess.get('signUpStatus'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userAccessActions: bindActionCreators(userAccessActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
