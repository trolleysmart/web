// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import MyStores from './MyStores';

class MyStoresContainer extends Component {
  render = () => <MyStores />;
}

MyStoresContainer.propTypes = {};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(MyStoresContainer);
