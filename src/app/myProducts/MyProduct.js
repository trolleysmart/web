// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { TableCell, TableRow } from 'material-ui/Table';

const MyProduct = ({ key, name, size }) => (
  <TableRow key={key}>
    <TableCell>{name}</TableCell>
    <TableCell>{size}</TableCell>
  </TableRow>
);

MyProduct.propTypes = {
  key: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default MyProduct;
