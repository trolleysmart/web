// @flow

import React, { Component } from 'react';
import { environment } from '../../framework/relay';
import { graphql, QueryRenderer } from 'react-relay';
import MyStoresRelayContainer from './MyStoresRelayContainer';
import Loading from '../../sharedComponents/loading';

class MyStores extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query MyStoresQuery($count: Int!, $cursor: String) {
            user {
              ...MyStoresRelayContainer_user
            }
          }
        `}
        variables={{
          cursor: null,
          count: 30,
        }}
        render={({ error, props, retry }) => {
          if (error) {
            console.log(error);
            return <div />;
          }

          if (props) {
            return <MyStoresRelayContainer user={props.user} />;
          }

          return <Loading />;
        }}
      />
    );
  }
}

export default MyStores;
