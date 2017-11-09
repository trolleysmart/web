// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemIcon } from 'material-ui/List';
import SignOutIcon from 'material-ui-icons/PowerSettingsNew';

export const notSignedInStoreMainDrawerListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <SignOutIcon />
      </ListItemIcon>
      <Link to="/signin">Sign In</Link>
    </ListItem>
  </div>
);

export const signedInStoreMainDrawerListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <SignOutIcon />
      </ListItemIcon>
      <Link to="/signout">Sign Out</Link>
    </ListItem>
  </div>
);
