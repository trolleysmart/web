// @flow

import * as userAccessActions from 'micro-business-parse-server-common-web/dist/userAccess/Actions';
import { UserAccessStatus } from 'micro-business-parse-server-common-web';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { LinearProgress } from 'material-ui/Progress';
import { withStyles } from 'material-ui/styles';
import withRoot from './sharedComponents/withRoot';
import { HomeContainer } from './app/home';
import { SignInContainer } from './app/auth';
import Styles from './Styles';
import './App.css';

class App extends Component {
  componentWillMount = () => {
    this.props.userAccessActions.getCurrentUser();
  };

  render = () =>
    this.props.getCurrentUserStatus === UserAccessStatus.IN_PROGRESS ? (
      <div className={this.props.classes.progressRoot}>
        <LinearProgress />
      </div>
    ) : (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/signin" component={SignInContainer} />
        </div>
      </BrowserRouter>
    );
}

App.propTypes = {
  getCurrentUserStatus: PropTypes.number.isRequired,
};

function mapStateToProps(state) {
  return {
    getCurrentUserStatus: state.userAccess.get('getCurrentUserStatus'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userAccessActions: bindActionCreators(userAccessActions, dispatch),
  };
}

export default withRoot(withStyles(Styles)(connect(mapStateToProps, mapDispatchToProps)(App)));
