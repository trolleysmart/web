// @flow

import { commitMutation, graphql } from 'react-relay';
import { ConnectionHandler } from 'relay-runtime';
import uuid from 'uuid/v4';
import { MessageType } from 'micro-business-common-react';
import * as messageBarActions from 'micro-business-common-react/src/messageBar/Actions';
import { reduxStore } from '../../redux';

const mutation = graphql`
  mutation AddStoreMutation($input: AddStoreInput!) {
    addStore(input: $input) {
      errorMessage
      store {
        __typename
        cursor
        node {
          id
          name
          address
        }
      }
    }
  }
`;

const sharedUpdater = (store, userId, storeItemsEdge) => {
  const userProxy = store.get(userId);
  const connection = ConnectionHandler.getConnection(userProxy, 'User_ownedStores');

  if (!connection) {
    return;
  }

  ConnectionHandler.insertEdgeAfter(connection, storeItemsEdge);
};

const commit = (environment, userId, name, address) => {
  return commitMutation(environment, {
    mutation,
    variables: {
      input: {
        name,
        address,
      },
    },
    updater: store => {
      const payload = store.getRootField('addStore');
      const errorMessage = payload.getValue('errorMessage');

      if (errorMessage) {
        reduxStore.dispatch(messageBarActions.add(errorMessage, MessageType.ERROR));
      } else {
        const storeEdge = payload.getLinkedRecord('store');

        sharedUpdater(store, userId, storeEdge);
      }
    },
    optimisticUpdater: store => {
      const id = uuid();
      const node = store.create(id, 'item');

      node.setValue(true, 'savingInProgress');
      node.setValue(id, 'id');
      node.setValue(name, 'name');
      node.setValue(name, 'address');

      const storeEdge = store.create(uuid(), 'StoreEdge');

      storeEdge.setLinkedRecord(node, 'node');
      sharedUpdater(store, userId, storeEdge);
    },
  });
};

export default {
  commit,
};
