// @flow

import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { configParseServerSdk } from 'micro-business-parse-server-common-web';
import App from './App';
import Config from './framework/config';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

configParseServerSdk(Config.parseServerUrl, Config.parseServerApplicationId, Config.parseServerJavascriptKey);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
