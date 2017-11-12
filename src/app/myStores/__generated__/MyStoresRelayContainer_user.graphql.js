/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type MyStoresRelayContainer_user = {|
  +id: string;
  +ownedStores: ?{|
    +pageInfo: {|
      +hasNextPage: boolean;
      +endCursor: ?string;
    |};
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string;
        +key: ?string;
        +name: ?string;
        +imageUrl: ?string;
        +address: ?string;
        +phones: ?$ReadOnlyArray<{|
          +label: ?string;
          +number: ?string;
        |}>;
        +openingHours: ?{|
          +from: ?string;
          +until: ?string;
        |};
      |};
    |}>;
  |};
|};
*/

const fragment /*: ConcreteFragment*/ = {
  argumentDefinitions: [
    {
      kind: 'RootArgument',
      name: 'count',
      type: 'Int',
    },
    {
      kind: 'RootArgument',
      name: 'cursor',
      type: 'String',
    },
  ],
  kind: 'Fragment',
  metadata: {
    connection: [
      {
        count: 'count',
        cursor: 'cursor',
        direction: 'forward',
        path: ['ownedStores'],
      },
    ],
  },
  name: 'MyStoresRelayContainer_user',
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
      alias: 'ownedStores',
      args: null,
      concreteType: 'OwnedStoreTypeConnection',
      name: '__User_ownedStores_connection',
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
                {
                  kind: 'ScalarField',
                  alias: null,
                  args: null,
                  name: '__typename',
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
  ],
  type: 'User',
};

module.exports = fragment;
