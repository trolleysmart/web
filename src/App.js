// @flow

import React, { Component } from 'react';
import { configParseServerSdk } from 'micro-business-parse-server-common-web';
import { Provider } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import withRoot from './sharedComponents/withRoot';
import Config from './framework/config';
import { configureStore } from './framework/redux';
import { SignInContainer } from './app/auth';
import './App.css';

const store = configureStore();

class App extends Component {
  constructor(props, context) {
    super(props, context);

    configParseServerSdk(Config.parseServerUrl, Config.parseServerApplicationId, Config.parseServerJavascriptKey);

    this.state = {
      store,
    };
  }

  render = () => (
    <Provider store={this.state.store}>
      <BrowserRouter>
        <div>
          <nav>
            <Link to="/signin">Sign In</Link>
          </nav>
          <div>
            <Route path="/signin" component={SignInContainer} />
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default withRoot(App);
