// @flow

import { createPaginationContainer, graphql } from 'react-relay';
import MyProductsContainer from './MyProductsContainer';

export default createPaginationContainer(
  MyProductsContainer,
  {
    user: graphql`
      fragment MyProductsRelayContainer_user on User {
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
      query MyProductsRelayContainerPaginationQuery($count: Int!, $cursor: String) {
        user {
          ...MyProductsRelayContainer_user
        }
      }
    `,
  },
);
