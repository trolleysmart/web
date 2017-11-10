// @flow

import * as userAccessActions from 'micro-business-parse-server-common-web/dist/userAccess/Actions';
import { UserAccessStatus } from 'micro-business-parse-server-common-web';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { LinearProgress } from 'material-ui/Progress';
import SignUp from './SignUp';

class SignUpContainer extends Component {
  componentWillReceiveProps = nextProps => {
    if (nextProps.signUpStatus === UserAccessStatus.SUCCEEDED) {
      this.props.userAccessActions.resetSignUpStatus();

      if (this.props.history.location.state && this.props.history.location.state.from) {
        this.props.history.goBack();
      } else {
        this.props.history.push('/');
      }
    }
  };

  handleSignUpWithUsernameAndPassword = values => {
    this.props.userAccessActions.signUpWithUsernameAndPassword(values.email, values.password, values.email, 'storeOwner');
  };

  handleCancel = () => {};

  render = () => (
    <div>
      {this.props.signUpStatus === UserAccessStatus.IN_PROGRESS && <LinearProgress />}

      <SignUp onSubmit={this.handleSignUpWithUsernameAndPassword} handleCancel={this.handleCancel} />
    </div>
  );
}

SignUpContainer.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUpContainer));
