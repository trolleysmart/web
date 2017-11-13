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
  render = () => (
    <MyStoresList
      stores={this.props.user.ownedStores.edges.map(_ => _.node).map(_ => ({
        id: _.id,
        key: _.key,
        name: _.name,
        imageUrl: _.imageUrl,
        address: _.address,
        openFrom: _.openingHours ? _.openingHours.from : '',
        openUntil: _.openingHours ? _.openingHours.until : '',
      }))}
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
