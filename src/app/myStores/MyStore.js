// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { TableCell, TableRow } from 'material-ui/Table';

const MyStore = ({ key, name, address }) => (
  <TableRow key={key}>
    <TableCell>{name}</TableCell>
    <TableCell>{address}</TableCell>
  </TableRow>
);

MyStore.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string,
};

export default MyStore;
