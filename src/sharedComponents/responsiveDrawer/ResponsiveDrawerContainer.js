// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ResponsiveDrawer from './ResponsiveDrawer';

class ResponsiveDrawerContainer extends Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render = () => (
    <ResponsiveDrawer
      mobileOpen={this.state.mobileOpen}
      handleDrawerToggle={this.handleDrawerToggle}
      drawerListItems={this.props.drawerListItems}
      appBarTitle={this.props.appBarTitle}
    />
  );
}

ResponsiveDrawer.propTypes = {
  drawerListItems: PropTypes.object.isRequired,
  appBarTitle: PropTypes.string.isRequired,
};

export default ResponsiveDrawerContainer;
