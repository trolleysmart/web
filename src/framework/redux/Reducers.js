// @flow

import { combineReducers } from 'redux';
import { UserAccessReducer } from 'micro-business-parse-server-common-web';
import { AppUpdaterReducer, MessageBarReducer } from 'micro-business-common-react';

export default function getReducers() {
  return combineReducers({
    userAccess: UserAccessReducer,
    appUpdater: AppUpdaterReducer,
    messageBar: MessageBarReducer,
  });
}
