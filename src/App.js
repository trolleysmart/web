// @flow

import React, { Component } from 'react';
import { configParseServerSdk } from 'micro-business-parse-server-common-web';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import withRoot from './sharedComponents/withRoot';
import Config from './framework/config';
import { configureStore } from './framework/redux';
import { ResponsiveDrawerContainer } from './sharedComponents/responsiveDrawer';
import storeMainDrawerListItems from './app/navigation';
import './App.css';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    configParseServerSdk(Config.parseServerUrl, Config.parseServerApplicationId, Config.parseServerJavascriptKey);

    this.state = {
      store: configureStore(),
    };
  }

  render = () => (
    <Provider store={this.state.store}>
      <BrowserRouter>
        <ResponsiveDrawerContainer drawerListItems={storeMainDrawerListItems} appBarTitle="Trolley Smart" />
      </BrowserRouter>
    </Provider>
  );
}

export default withRoot(App);
