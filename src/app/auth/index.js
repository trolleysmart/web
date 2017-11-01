// @flow

import { UserService } from 'micro-business-parse-server-common-web';
import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK, AUTH_ERROR } from 'admin-on-rest';

export default (type, params) => {
  if (type === AUTH_LOGIN) {
    const { username, password } = params;

    return UserService.signInWithUsernameAndPassword(username, password);
  }

  if (type === AUTH_LOGOUT) {
    return UserService.signOut();
  }

  if (type === AUTH_CHECK) {
    return UserService.getCurrentUserInfo();
  }

  if (type === AUTH_ERROR) {
    const { status } = params;

    return status === 401 || status === 403 ? Promise.reject() : Promise.resolve();
  }

  return Promise.reject('Unknown method');
};
