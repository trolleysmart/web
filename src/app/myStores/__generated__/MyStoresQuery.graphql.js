/**
 * @flow
 * @relayHash f7cfd5bfc63d81421b75d90b1cacad7a
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type MyStoresQueryResponse = {|
  +user: ?{| |};
|};
*/

/*
query MyStoresQuery(
  $count: Int!
  $cursor: String
) {
  user {
    ...MyStoresRelayContainer_user
    id
  }
}

fragment MyStoresRelayContainer_user on User {
  id
  ownedStores(first: $count, after: $cursor) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        __typename
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
      cursor
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  fragment: {
    argumentDefinitions: [
      {
        kind: 'LocalArgument',
        name: 'count',
        type: 'Int!',
        defaultValue: null,
      },
      {
        kind: 'LocalArgument',
        name: 'cursor',
        type: 'String',
        defaultValue: null,
      },
    ],
    kind: 'Fragment',
    metadata: null,
    name: 'MyStoresQuery',
    selections: [
      {
        kind: 'LinkedField',
        alias: null,
        args: null,
        concreteType: 'User',
        name: 'user',
        plural: false,
        selections: [
          {
            kind: 'FragmentSpread',
            name: 'MyStoresRelayContainer_user',
            args: null,
          },
        ],
        storageKey: null,
      },
    ],
    type: 'Query',
  },
  id: null,
  kind: 'Batch',
  metadata: {},
  name: 'MyStoresQuery',
  query: {
    argumentDefinitions: [
      {
        kind: 'LocalArgument',
        name: 'count',
        type: 'Int!',
        defaultValue: null,
      },
      {
        kind: 'LocalArgument',
        name: 'cursor',
        type: 'String',
        defaultValue: null,
      },
    ],
    kind: 'Root',
    name: 'MyStoresQuery',
    operation: 'query',
    selections: [
      {
        kind: 'LinkedField',
        alias: null,
        args: null,
        concreteType: 'User',
        name: 'user',
        plural: false,
        selections: [
          {
            kind: 'ScalarField',
            alias: null,
            args: null,
            name: 'id',
            storageKey: null,
          },
          {
            kind: 'LinkedField',
            alias: null,
            args: [
              {
                kind: 'Variable',
                name: 'after',
                variableName: 'cursor',
                type: 'String',
              },
              {
                kind: 'Variable',
                name: 'first',
                variableName: 'count',
                type: 'Int',
              },
            ],
            concreteType: 'OwnedStoreTypeConnection',
            name: 'ownedStores',
            plural: false,
            selections: [
              {
                kind: 'LinkedField',
                alias: null,
                args: null,
                concreteType: 'PageInfo',
                name: 'pageInfo',
                plural: false,
                selections: [
                  {
                    kind: 'ScalarField',
                    alias: null,
                    args: null,
                    name: 'hasNextPage',
                    storageKey: null,
                  },
                  {
                    kind: 'ScalarField',
                    alias: null,
                    args: null,
                    name: 'endCursor',
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                kind: 'LinkedField',
                alias: null,
                args: null,
                concreteType: 'OwnedStoreTypeEdge',
                name: 'edges',
                plural: true,
                selections: [
                  {
                    kind: 'LinkedField',
                    alias: null,
                    args: null,
                    concreteType: 'OwnedStore',
                    name: 'node',
                    plural: false,
                    selections: [
                      {
                        kind: 'ScalarField',
                        alias: null,
                        args: null,
                        name: '__typename',
                        storageKey: null,
                      },
                      {
                        kind: 'ScalarField',
                        alias: null,
                        args: null,
                        name: 'id',
                        storageKey: null,
                      },
                      {
                        kind: 'ScalarField',
                        alias: null,
                        args: null,
                        name: 'key',
                        storageKey: null,
                      },
                      {
                        kind: 'ScalarField',
                        alias: null,
                        args: null,
                        name: 'name',
                        storageKey: null,
                      },
                      {
                        kind: 'ScalarField',
                        alias: null,
                        args: null,
                        name: 'imageUrl',
                        storageKey: null,
                      },
                      {
                        kind: 'ScalarField',
                        alias: null,
                        args: null,
                        name: 'address',
                        storageKey: null,
                      },
                      {
                        kind: 'LinkedField',
                        alias: null,
                        args: null,
                        concreteType: 'Phone',
                        name: 'phones',
                        plural: true,
                        selections: [
                          {
                            kind: 'ScalarField',
                            alias: null,
                            args: null,
                            name: 'label',
                            storageKey: null,
                          },
                          {
                            kind: 'ScalarField',
                            alias: null,
                            args: null,
                            name: 'number',
                            storageKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                      {
                        kind: 'LinkedField',
                        alias: null,
                        args: null,
                        concreteType: 'OpeningHours',
                        name: 'openingHours',
                        plural: false,
                        selections: [
                          {
                            kind: 'ScalarField',
                            alias: null,
                            args: null,
                            name: 'from',
                            storageKey: null,
                          },
                          {
                            kind: 'ScalarField',
                            alias: null,
                            args: null,
                            name: 'until',
                            storageKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  {
                    kind: 'ScalarField',
                    alias: null,
                    args: null,
                    name: 'cursor',
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            kind: 'LinkedHandle',
            alias: null,
            args: [
              {
                kind: 'Variable',
                name: 'after',
                variableName: 'cursor',
                type: 'String',
              },
              {
                kind: 'Variable',
                name: 'first',
                variableName: 'count',
                type: 'Int',
              },
            ],
            handle: 'connection',
            name: 'ownedStores',
            key: 'User_ownedStores',
            filters: null,
          },
        ],
        storageKey: null,
      },
    ],
  },
  text:
    'query MyStoresQuery(\n  $count: Int!\n  $cursor: String\n) {\n  user {\n    ...MyStoresRelayContainer_user\n    id\n  }\n}\n\nfragment MyStoresRelayContainer_user on User {\n  id\n  ownedStores(first: $count, after: $cursor) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      node {\n        __typename\n        id\n        key\n        name\n        imageUrl\n        address\n        phones {\n          label\n          number\n        }\n        openingHours {\n          from\n          until\n        }\n      }\n      cursor\n    }\n  }\n}\n',
};

module.exports = batch;
