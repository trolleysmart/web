// @flow

import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import ProductIcon from 'material-ui-icons/List';
import SignOutIcon from 'material-ui-icons/PowerSettingsNew';

const storeMainDrawerListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <ProductIcon />
      </ListItemIcon>
      <ListItemText primary="My Stores" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ProductIcon />
      </ListItemIcon>
      <ListItemText primary="My Products" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SignOutIcon />
      </ListItemIcon>
      <ListItemText primary="Sign In" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SignOutIcon />
      </ListItemIcon>
      <ListItemText primary="Sign Up" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SignOutIcon />
      </ListItemIcon>
      <ListItemText primary="Sign Out" />
    </ListItem>
  </div>
);

export default storeMainDrawerListItems;
