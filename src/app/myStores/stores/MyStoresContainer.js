// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import MyStoresList from './MyStoresList';
import { type MyStoresRelayContainer_user } from './__generated__/MyStoresRelayContainer_user.graphql';

type Props = {
  user: MyStoresRelayContainer_user,
};

type State = {
  isFetchingTop: boolean,
};

class MyStoresContainer extends Component<any, Props, State> {
  state = {
    sortingState: [{ columnName: 'name', direction: 'desc' }],
  };

  handleSortingChanged = sortingState => {
    this.setState({ sortingState });
  };

  render = () => (
    <MyStoresList
      stores={this.props.user.ownedStores.edges
        .map(_ => _.node)
        .map(_ => ({
          id: _.id,
          key: _.key,
          name: _.name,
          imageUrl: _.imageUrl,
          address: _.address,
          openFrom: _.openingHours ? _.openingHours.from : '',
          openUntil: _.openingHours ? _.openingHours.until : '',
        }))
        .sort((store1, store2) => {
          const columnSorting = this.state.sortingState[0];

          if (columnSorting.direction.localeCompare('desc') === 0) {
            if (columnSorting.columnName.localeCompare('name') === 0) {
              return store1.name.localeCompare(store2.name);
            } else if (columnSorting.columnName.localeCompare('address') === 0) {
              return store1.name.localeCompare(store2.address);
            } else if (columnSorting.columnName.localeCompare('openFrom') === 0) {
              return store1.name.localeCompare(store2.openFrom);
            } else if (columnSorting.columnName.localeCompare('openUntil') === 0) {
              return store1.name.localeCompare(store2.openUntil);
            } else {
              return store1.name.localeCompare(store2.name);
            }
          } else {
            let comparisonResult;

            if (columnSorting.columnName.localeCompare('name') === 0) {
              comparisonResult = store1.name.localeCompare(store2.name);
            } else if (columnSorting.columnName.localeCompare('address') === 0) {
              comparisonResult = store1.name.localeCompare(store2.address);
            } else if (columnSorting.columnName.localeCompare('openFrom') === 0) {
              comparisonResult = store1.name.localeCompare(store2.openFrom);
            } else if (columnSorting.columnName.localeCompare('openUntil') === 0) {
              comparisonResult = store1.name.localeCompare(store2.openUntil);
            } else {
              comparisonResult = store1.name.localeCompare(store2.name);
            }

            if (comparisonResult > 0) {
              return -1;
            } else if (comparisonResult < 0) {
              return 1;
            } else {
              return 0;
            }
          }
        })}
      sortingState={this.state.sortingState}
      handleSortingChanged={this.handleSortingChanged}
    />
  );
}

MyStoresContainer.propTypes = {};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(MyStoresContainer);
