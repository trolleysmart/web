// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import MyProducts from './MyProducts';

class MyProductsContainer extends Component {
  render = () => <MyProducts />;
}

MyProductsContainer.propTypes = {};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(MyProductsContainer);
