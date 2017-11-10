// @flow

import * as userAccessActions from 'micro-business-parse-server-common-web/dist/userAccess/Actions';
import { UserAccessStatus } from 'micro-business-parse-server-common-web';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { LinearProgress } from 'material-ui/Progress';
import { ResponsiveDrawerContainer } from '../../sharedComponents/responsiveDrawer';
import { notSignedInStoreMainDrawerListItems, signedInStoreMainDrawerListItems } from '../navigation';

class HomeContainer extends Component {
  componentWillReceiveProps = nextProps => {
    if (nextProps.signOutStatus === UserAccessStatus.SUCCEEDED) {
      this.props.userAccessActions.resetSignOutStatus();
      this.props.history.push('/');
    }
  };

  handleSignOut = values => {
    this.props.userAccessActions.signOut();
  };

  render = () => (
    <div>
      {this.props.signOutStatus === UserAccessStatus.IN_PROGRESS && <LinearProgress />}
      <ResponsiveDrawerContainer
        drawerListItems={this.props.userExists ? signedInStoreMainDrawerListItems(this.handleSignOut) : notSignedInStoreMainDrawerListItems}
        appBarTitle="Trolley Smart"
      />
    </div>
  );
}

HomeContainer.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  userAccessActions: PropTypes.object.isRequired,
  userExists: PropTypes.bool.isRequired,
  signOutStatus: PropTypes.number.isRequired,
};

function mapStateToProps(state) {
  return {
    signOutStatus: state.userAccess.get('signOutStatus'),
    userExists: state.userAccess.get('userExists'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userAccessActions: bindActionCreators(userAccessActions, dispatch),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeContainer));
