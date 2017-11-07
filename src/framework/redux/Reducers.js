// @flow

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { UserAccessReducer } from 'micro-business-parse-server-common-web';
import { AppUpdaterReducer, MessageBarReducer } from 'micro-business-common-react';

export default function getReducers() {
  return combineReducers({
    form: formReducer,
    userAccess: UserAccessReducer,
    appUpdater: AppUpdaterReducer,
    messageBar: MessageBarReducer,
  });
}
