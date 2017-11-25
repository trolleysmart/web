// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductsList from './ProductsList';
import { type ProductsRelayContainer_user } from './__generated__/ProductsRelayContainer_user.graphql';

type Props = {
  user: ProductsRelayContainer_user,
};

type State = {
  isFetchingTop: boolean,
};

class ProductsContainer extends Component<any, Props, State> {
  state = {
    sortingState: [{ columnName: 'name', direction: 'desc' }],
  };

  handleSortingChanged = sortingState => {
    this.setState({ sortingState });
  };

  render = () => (
    <ProductsList
      myProducts={this.props.user.myProducts.edges.map(_ => _.node).sort((myProduct1, myProduct2) => {
        const columnSorting = this.state.sortingState[0];

        if (columnSorting.direction.localeCompare('desc') === 0) {
          if (columnSorting.columnName.localeCompare('name') === 0) {
            return myProduct1.name.localeCompare(myProduct2.name);
          } else if (columnSorting.columnName.localeCompare('description') === 0) {
            return myProduct1.name.localeCompare(myProduct2.description);
          } else {
            return myProduct1.name.localeCompare(myProduct2.name);
          }
        } else {
          let comparisonResult;

          if (columnSorting.columnName.localeCompare('name') === 0) {
            comparisonResult = myProduct1.name.localeCompare(myProduct2.name);
          } else if (columnSorting.columnName.localeCompare('description') === 0) {
            comparisonResult = myProduct1.name.localeCompare(myProduct2.description);
          } else {
            comparisonResult = myProduct1.name.localeCompare(myProduct2.name);
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

ProductsContainer.propTypes = {};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
