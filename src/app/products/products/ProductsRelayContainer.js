// @flow

import { createPaginationContainer, graphql } from 'react-relay';
import ProductsContainer from './ProductsContainer';

export default createPaginationContainer(
  ProductsContainer,
  {
    user: graphql`
      fragment ProductsRelayContainer_user on User {
        id
        myProducts(first: $count, after: $cursor) @connection(key: "User_myProducts") {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            node {
              id
              name
              description
            }
          }
        }
      }
    `,
  },
  {
    direction: 'forward',
    getConnectionFromProps(props) {
      return props.user && props.user.myProducts;
    },
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount,
      };
    },
    getVariables(props, { count, cursor }, fragmentVariables) {
      return {
        count,
        cursor,
      };
    },
    variables: {
      cursor: null,
    },
    query: graphql`
      query ProductsRelayContainerPaginationQuery($count: Int!, $cursor: String) {
        user {
          ...ProductsRelayContainer_user
        }
      }
    `,
  },
);
