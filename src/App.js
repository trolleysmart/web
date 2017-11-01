// @flow

import React, { Component } from 'react';
import { Admin } from 'admin-on-rest';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return <Admin title="TrolleySmart" locale="en" />;
  }
}

export default App;
