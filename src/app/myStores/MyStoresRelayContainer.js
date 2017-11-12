// @flow

import { createPaginationContainer, graphql } from 'react-relay';
import MyStoresContainer from './MyStoresContainer';

export default createPaginationContainer(
  MyStoresContainer,
  {
    user: graphql`
      fragment MyStoresRelayContainer_user on User {
        id
        ownedStores(first: $count, after: $cursor) @connection(key: "User_ownedStores") {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            node {
              id
              key
              name
              imageUrl
              address
              phones {
                label
                number
              }
              openingHours {
                from
                until
              }
            }
          }
        }
      }
    `,
  },
  {
    direction: 'forward',
    getConnectionFromProps(props) {
      return props.user && props.user.ownedStores;
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
      query MyStoresRelayContainerPaginationQuery($count: Int!, $cursor: String) {
        user {
          ...MyStoresRelayContainer_user
        }
      }
    `,
  },
);
