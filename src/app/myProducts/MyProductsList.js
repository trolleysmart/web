// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { PagingState, SortingState } from '@devexpress/dx-react-grid';
import { Grid, TableView, TableHeaderRow, PagingPanel } from '@devexpress/dx-react-grid-material-ui';
import { TableCell } from 'material-ui';
import Paper from 'material-ui/Paper';
import Styles from './Styles';
import { MyProductsProp } from './PropTypes';

const MyProductsList = ({ classes, myProducts, sortingState, handleSortingChanged }) => (
  <Paper className={classes.root}>
    <Grid columns={[{ name: 'name', title: 'Name' }, { name: 'description', title: 'description' }]} rows={myProducts}>
      <SortingState sorting={sortingState} onSortingChange={handleSortingChanged} />
      <TableView />
      <TableHeaderRow allowSorting />
    </Grid>
  </Paper>
);

MyProductsList.propTypes = {
  classes: PropTypes.object.isRequired,
  myProducts: MyProductsProp,
  sortingState: PropTypes.arrayOf(
    PropTypes.shape({
      columnName: PropTypes.string.isRequired,
      direction: PropTypes.string.isRequired,
    }),
  ),
  handleSortingChanged: PropTypes.func.isRequired,
};

export default withStyles(Styles)(MyProductsList);