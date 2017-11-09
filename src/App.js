// @flow

import * as userAccessActions from 'micro-business-parse-server-common-web/dist/userAccess/Actions';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import withRoot from './sharedComponents/withRoot';
import { ResponsiveDrawerContainer } from './sharedComponents/responsiveDrawer';
import { notSignedInStoreMainDrawerListItems, signedInStoreMainDrawerListItems } from './app/navigation';
import { SignInContainer } from './app/auth';
import './App.css';

class App extends Component {
  componentWillMount = () => {
    this.props.userAccessActions.getCurrentUser();
  };

  render = () => (
    <BrowserRouter>
      <ResponsiveDrawerContainer
        drawerListItems={this.props.userExists ? signedInStoreMainDrawerListItems : notSignedInStoreMainDrawerListItems}
        appBarTitle="Trolley Smart"
      >
        <Route path="/signin" component={SignInContainer} />
      </ResponsiveDrawerContainer>
    </BrowserRouter>
  );
}

App.propTypes = {
  userExists: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    userExists: state.userAccess.get('userExists'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userAccessActions: bindActionCreators(userAccessActions, dispatch),
  };
}

export default withRoot(connect(mapStateToProps, mapDispatchToProps)(App));
