// @flow

import React from 'react';
import { environment } from '../../../framework/relay';
import { graphql, QueryRenderer } from 'react-relay';
import ProductsRelayContainer from './ProductsRelayContainer';
import Loading from '../../../sharedComponents/loading';

const Products = () => (
  <QueryRenderer
    environment={environment}
    query={graphql`
      query ProductsQuery($count: Int!, $cursor: String) {
        user {
          ...ProductsRelayContainer_user
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
        return <ProductsRelayContainer user={props.user} />;
      }

      return <Loading />;
    }}
  />
);

export default Products;
