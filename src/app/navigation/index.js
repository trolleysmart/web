// @flow

import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import SignOutIcon from 'material-ui-icons/PowerSettingsNew';

export const notSignedInStoreMainDrawerListItems = (
  <div>
    <ListItem button />
  </div>
);

export const signedInStoreMainDrawerListItems = handleSignOut => (
  <div>
    <ListItem button onClick={handleSignOut}>
      <ListItemIcon>
        <SignOutIcon />
      </ListItemIcon>
      <ListItemText primary="Sign Out" />
    </ListItem>
  </div>
);
