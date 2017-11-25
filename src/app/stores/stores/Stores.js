// @flow

import React from 'react';
import { environment } from '../../../framework/relay';
import { graphql, QueryRenderer } from 'react-relay';
import Loading from '../../../sharedComponents/loading';
import StoresRelayContainer from './StoresRelayContainer';

const Stores = () => (
  <QueryRenderer
    environment={environment}
    query={graphql`
      query StoresQuery($count: Int!, $cursor: String) {
        user {
          ...StoresRelayContainer_user
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
        return <StoresRelayContainer user={props.user} />;
      }

      return <Loading />;
    }}
  />
);

export default Stores;
