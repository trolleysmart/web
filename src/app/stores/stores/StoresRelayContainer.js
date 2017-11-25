// @flow

import { createPaginationContainer, graphql } from 'react-relay';
import StoresContainer from './StoresContainer';

export default createPaginationContainer(
  StoresContainer,
  {
    user: graphql`
      fragment StoresRelayContainer_user on User {
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
      query StoresRelayContainerPaginationQuery($count: Int!, $cursor: String) {
        user {
          ...StoresRelayContainer_user
        }
      }
    `,
  },
);
