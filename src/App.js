// @flow

import React, { Component } from 'react';
import { Admin, Resource } from 'admin-on-rest';
import authClient from './framework/auth';
import './App.css';

import { List, Datagrid, TextField } from 'admin-on-rest';

export const PostList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="body" />
    </Datagrid>
  </List>
);

class App extends Component {
  render = () => (
    <Admin title="TrolleySmart" locale="en" authClient={authClient} restClient={null}>
      <Resource name="posts" list={PostList} />
      <Resource name="test" list={PostList} />
    </Admin>
  );
}

export default App;
