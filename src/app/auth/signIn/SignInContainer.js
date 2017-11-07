// @flow

import React, { Component } from 'react';
import SignIn from './SignIn';

class SignInContainer extends Component {
  handleSignIn = values => {};

  handleCancel = () => {};

  render = () => <SignIn onSubmit={this.handleSignIn} handleCancel={this.handleCancel} />;
}

export default SignInContainer;
