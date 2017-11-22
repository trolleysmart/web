// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { PagingState, SortingState } from '@devexpress/dx-react-grid';
import { Grid, TableView, TableHeaderRow, PagingPanel } from '@devexpress/dx-react-grid-material-ui';
import { TableCell } from 'material-ui';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import Paper from 'material-ui/Paper';
import Styles from './Styles';
import { StoresProp } from './PropTypes';

const MyStoresList = ({ classes, stores, sortingState, handleSortingChanged }) => (
  <Paper className={classes.root}>
    <Grid
      columns={[
        { name: 'name', title: 'Name' },
        { name: 'address', title: 'Address' },
        { name: 'openFrom', title: 'Open From' },
        { name: 'openUntil', title: 'Open Until' },
      ]}
      rows={stores}
    >
      <SortingState sorting={sortingState} onSortingChange={handleSortingChanged} />
      <TableView />
      <TableHeaderRow allowSorting />
    </Grid>
    <Button fab color="primary" aria-label="add" className={classes.button}>
      <AddIcon />
    </Button>
  </Paper>
);

MyStoresList.propTypes = {
  classes: PropTypes.object.isRequired,
  stores: StoresProp,
  sortingState: PropTypes.arrayOf(
    PropTypes.shape({
      columnName: PropTypes.string.isRequired,
      direction: PropTypes.string.isRequired,
    }),
  ),
  handleSortingChanged: PropTypes.func.isRequired,
};

export default withStyles(Styles)(MyStoresList);
