// @flow

import React, { Component } from 'react';
import { configParseServerSdk } from 'micro-business-parse-server-common-web';
import { Provider } from 'react-redux';
import Config from './framework/config';
import { configureStore } from './framework/redux';
import './App.css';

const store = configureStore();

class App extends Component {
  constructor(props, context) {
    super(props, context);

    configParseServerSdk(Config.PARSE_SERVER_URL, Config.PARSE_SERVER_APPLICATION_ID, Config.PARSE_SERVER_JAVASCRIPT_KEY);

    this.state = {
      store,
    };
  }

  render = () => (
    <Provider store={this.state.store}>
      <h1>This is a test</h1>
    </Provider>
  );
}

export default App;
