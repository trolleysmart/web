// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import MyStoresList from './MyStoresList';

class MyStoresContainer extends Component {
  render = () => <MyStoresList />;
}

MyStoresContainer.propTypes = {};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(MyStoresContainer);
