// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import MyStore from './MyStore';
import Styles from './Styles';

const MyStoresList = ({ classes }) => (
  <Paper className={classes.root}>
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Address</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <MyStore storeKey="1" name="Name 1" address="Address 1" />
        <MyStore storeKey="2" name="Name 2" address="Address 2" />
      </TableBody>
    </Table>
  </Paper>
);

MyStoresList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(Styles)(MyStoresList);