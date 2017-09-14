// @flow

import React from 'react';
import injectSheet from 'react-jss';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import validate from './validate';
import warn from './warn';
import submit from './submit';
import renderFieldInput from './renderFieldInput';
import { login } from '../../action/user';

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

const SimpleForm = ({ handleSubmit, pristine, reset, submitting, classes, loginUser }: { handleSubmit: Function,
pristine: boolean, reset: Function, loginUser: Function, submitting: boolean, classes: Object }) => {
    function onSubmit(values) {
        const resultSubmit = submit(values);
        if (resultSubmit === 'submited') {
      // console.log(values);
            loginUser(values);
            return reset();
        }
        return resultSubmit;
    }

    return (
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <div className="form-group">
          <div>
            <Field
              name="login"
              label="Login Name"
              type="text"
              placeholder="asd@dsa.com"
              component={renderFieldInput}
              className="form-control"
              id="loginName"
            />
          </div>
        </div>
        <div className="form-group">
          <div>
            <Field
              name="password"
              label="Password"
              type="password"
              placeholder="password"
              component={renderFieldInput}
              className="form-control"
              id="loginPassword"
            />
          </div>
          <div className="form-group">
            <Field
              name="isAdmin"
              label="Are you admin?"
              placeholder="Are you admin?"
              id="isAdmin"
              component={renderFieldInput}
              type="checkbox"
            />
          </div>
          <button className={classes.btn} type="submit" disabled={pristine || submitting}>Submit</button>
          <button className={classes.btn} type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
        </div>
      </form>
    );
};

export default connect(null, { loginUser: login })(reduxForm({
    form: 'login',
    validate,
    warn,
})(injectSheet(styles)(SimpleForm)));
