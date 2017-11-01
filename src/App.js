// @flow

import React, { Component } from 'react';
import { Admin } from 'admin-on-rest';
import authClient from './app/auth';
import './App.css';

class App extends Component {
  render() {
    return <Admin title="TrolleySmart" locale="en" authClient={authClient} />;
  }
}

export default App;
