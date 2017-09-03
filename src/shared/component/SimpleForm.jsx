// @flow

import React from 'react';
import injectSheet from 'react-jss';
import { Field, reduxForm } from 'redux-form';

const styles = {
  form: {
    'font-family': 'PFSregular',
    'font-size': '1rem',
  },
  btn: {
    composes: ['btn', 'btn-primary'],
    margin: '20px',
  },
};

const SimpleForm = ({ handleSubmit, pristine, reset, submitting, classes }: { handleSubmit: Function,
pristine: boolean, reset: Function, submitting: boolean, classes: Object }) => (
  <form onSubmit={handleSubmit} className={classes.form}>
    <div className="form-group">
      <label htmlFor="loginName">Login Name</label>
      <div>
        <Field
          name="login"
          component="input"
          type="text"
          placeholder="asd@dsa.com"
          className="form-control"
          id="loginName"
        />
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="loginPassword">Password</label>
      <div>
        <Field
          name="password"
          component="input"
          type="password"
          placeholder="password"
          className="form-control"
          id="loginPassword"
        />
      </div>
      <button className={classes.btn} type="submit" disabled={pristine || submitting}>Submit</button>
      <button className={classes.btn} type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
    </div>
  </form>
  );

export default reduxForm({
  form: 'login',
})(injectSheet(styles)(SimpleForm));
