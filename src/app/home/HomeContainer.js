// @flow

import * as userAccessActions from 'micro-business-parse-server-common-web/dist/userAccess/Actions';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ResponsiveDrawerContainer } from '../../sharedComponents/responsiveDrawer';
import { notSignedInStoreMainDrawerListItems, signedInStoreMainDrawerListItems } from '../navigation';

class HomeContainer extends Component {
  handleSignOut = values => {
    this.props.userAccessActions.signOut();
  };

  render = () => (
    <ResponsiveDrawerContainer
      drawerListItems={this.props.userExists ? signedInStoreMainDrawerListItems(this.handleSignOut) : notSignedInStoreMainDrawerListItems}
      appBarTitle="Trolley Smart"
    />
  );
}

HomeContainer.propTypes = {
  userAccessActions: PropTypes.object.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
