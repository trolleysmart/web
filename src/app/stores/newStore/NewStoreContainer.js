// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { environment } from '../../../framework/relay';
import { AddStore } from '../../../framework/relay/mutations';
import NewStore from './NewStore';

class NewStoreContainer extends Component {
  handleAddStore = values => {
    AddStore.commit(environment, this.props.userId, values.name, values.address);
    this.props.history.goBack();
  };

  handleCancel = () => {
    this.props.history.goBack();
  };

  render = () => {
    return <NewStore onSubmit={this.handleAddStore} handleCancel={this.handleCancel} />;
  };
}

NewStoreContainer.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  userId: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    userId: state.userAccess.get('userInfo').get('id'),
  };
}

export default withRouter(connect(mapStateToProps)(NewStoreContainer));
