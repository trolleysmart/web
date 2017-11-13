// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Grid, TableView, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
import Paper from 'material-ui/Paper';
import Styles from './Styles';
import { StoresProp } from './PropTypes';

const MyStoresList = ({ classes, stores }) => (
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
      <TableView />
      <TableHeaderRow />
    </Grid>
  </Paper>
);

MyStoresList.propTypes = {
  classes: PropTypes.object.isRequired,
  stores: StoresProp,
};

export default withStyles(Styles)(MyStoresList);
