// @flow

import React from 'react';
import Button from 'material-ui/Button';
import Card, { CardContent, CardActions } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import Styles from './Styles';

const SignIn = ({ classes, handleSubmit }) => (
  <form className={classes.container} onSubmit={handleSubmit}>
    <Card>
      <CardContent>
        <div>
          <Field id="email" label="Email" name="email" component={TextField} type="email" />
        </div>
        <div>
          <Field id="password" label="Password" name="password" component={TextField} type="password" />
        </div>
      </CardContent>
      <CardActions>
        <Button color="primary" raised type="submit">
          Sign In
        </Button>
        <Button color="default" raised>
          Cancel
        </Button>
      </CardActions>
    </Card>
  </form>
);

SignIn.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

export default withStyles(Styles)(reduxForm({ form: 'SignIn' })(SignIn));
