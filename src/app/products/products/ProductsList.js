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
import { ProductsProp } from './PropTypes';

const ProductsList = ({ classes, myProducts, sortingState, handleSortingChanged }) => (
  <div>
    <Paper className={classes.root}>
      <Grid columns={[{ name: 'name', title: 'Name' }, { name: 'description', title: 'description' }]} rows={myProducts}>
        <SortingState sorting={sortingState} onSortingChange={handleSortingChanged} />
        <TableView />
        <TableHeaderRow allowSorting />
      </Grid>
    </Paper>
    <Button fab color="primary" aria-label="add" className={classes.fabButton}>
      <AddIcon />
    </Button>
  </div>
);

ProductsList.propTypes = {
  classes: PropTypes.object.isRequired,
  myProducts: ProductsProp,
  sortingState: PropTypes.arrayOf(
    PropTypes.shape({
      columnName: PropTypes.string.isRequired,
      direction: PropTypes.string.isRequired,
    }),
  ),
  handleSortingChanged: PropTypes.func.isRequired,
};

export default withStyles(Styles)(ProductsList);
