// @flow

import React, { Component } from 'react';
import { environment } from '../../framework/relay';
import { graphql, QueryRenderer } from 'react-relay';
import MyProductsRelayContainer from './MyProductsRelayContainer';
import Loading from '../../sharedComponents/loading';

class MyProducts extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query MyProductsQuery($count: Int!, $cursor: String) {
            user {
              ...MyProductsRelayContainer_user
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
            return <MyProductsRelayContainer user={props.user} />;
          }

          return <Loading />;
        }}
      />
    );
  }
}

export default MyProducts;
