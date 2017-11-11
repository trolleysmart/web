// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { TableCell, TableRow } from 'material-ui/Table';

const MyStore = ({ storeKey, name, address }) => (
  <TableRow key={storeKey}>
    <TableCell>{name}</TableCell>
    <TableCell>{address}</TableCell>
  </TableRow>
);

MyStore.propTypes = {
  storeKey: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string,
};

export default MyStore;
