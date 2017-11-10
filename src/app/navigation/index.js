// @flow

import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import SignOutIcon from 'material-ui-icons/PowerSettingsNew';
import { Link } from 'react-router-dom';

export const notSignedInStoreMainDrawerListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <SignOutIcon />
      </ListItemIcon>
      <Link to="/signin">Sign In</Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SignOutIcon />
      </ListItemIcon>
      <Link to="/signup">Sign Up</Link>
    </ListItem>
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
