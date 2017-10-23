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
import authUserServer from '../../action/authUserServer';

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


const SimpleForm = ({ handleSubmit, pristine, reset, submitting, classes, loginUser, auth }: { handleSubmit: Function,
pristine: boolean, reset: Function, loginUser: Function, auth: Function, submitting: boolean, classes: Object }) => {
    function submitResult(values) {
        const resultSubmit = submit(values);
        if (resultSubmit === 'submited') {
            auth(values);
            loginUser(values);
            return reset();
        }
        return resultSubmit;
    }

    return (
      <form onSubmit={handleSubmit(submitResult)} className={classes.form}>
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

export default connect(null, { loginUser: login, auth: authUserServer })(reduxForm({
    form: 'login',
    validate,
    warn,
})(injectSheet(styles)(SimpleForm)));
