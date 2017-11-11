// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { TableCell, TableRow } from 'material-ui/Table';

const MyProduct = ({ productkey, name, size }) => (
  <TableRow key={productkey}>
    <TableCell>{name}</TableCell>
    <TableCell>{size}</TableCell>
  </TableRow>
);

MyProduct.propTypes = {
  productkey: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default MyProduct;
