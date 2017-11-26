// @flow

import React from 'react';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import Styles from './Styles';

const NewStore = ({ classes, handleSubmit, handleCancel }) => (
  <form onSubmit={handleSubmit}>
    <Grid container direction="column">
      <Grid item>
        <Field id="name" label="Name" name="name" component={TextField} required />
      </Grid>
      <Grid item>
        <Field id="address" label="Address" name="address" component={TextField} />
      </Grid>
    </Grid>
    <Grid container direction="row">
      <Grid item>
        <Button color="primary" raised type="submit">
          Add
        </Button>
      </Grid>
      <Grid item>
        <Button color="default" raised onClick={handleCancel}>
          Cancel
        </Button>
      </Grid>
    </Grid>
  </form>
);

NewStore.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

export default withStyles(Styles)(reduxForm({ form: 'NewStore' })(NewStore));
