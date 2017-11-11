// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import MyProduct from './MyProduct';
import Styles from './Styles';

const MyProducts = ({ classes }) => (
  <Paper className={classes.root}>
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Size</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <MyProduct productkey="1" name="Name 1" size="Size 1" />
        <MyProduct productkey="2" name="Name 2" size="Size 2" />
      </TableBody>
    </Table>
  </Paper>
);

MyProducts.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(Styles)(MyProducts);
