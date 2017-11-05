// @flow

import React, { Component } from 'react';
import { configParseServerSdk } from 'micro-business-parse-server-common-web';
import { Provider } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Button from 'material-ui/Button';
import withRoot from './sharedComponents/withRoot';
import Config from './framework/config';
import { configureStore } from './framework/redux';
import './App.css';

const store = configureStore();

class Dashboard extends Component {
  render = () => (
    <Button colo="primary" raised>
      {' '}
      This is a test
    </Button>
  );
}

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
      <BrowserRouter>
        <div>
          <nav>
            <Link to="/dashboard">Dashboard</Link>
          </nav>
          <div>
            <Route path="/dashboard" component={Dashboard} />
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default withRoot(App);
