// @flow

import React from 'react';
import Helmet from 'react-helmet';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';

import SimpleForm from '../form/SimpleForm';
import authUserServer from '../../action/authUserServer';

const styles = {
    logo: {
        'font-family': 'PFSExtraBlack',
        'font-size': '2rem',
    },
};

const title = 'Login Page';

const LoginPage = ({ classes, getAuthUserServer }: {
  classes: Object, getAuthUserServer: Function,
  }) =>
    (<div className="container mt-4">
      <Helmet
        title={title}
        meta={[
        { name: 'description', content: 'page for login' },
        { property: 'og:title', content: title },
        ]}
      />
      <div className="row">
        <div className="offset-4 col-4">
          <h1 className={classes.logo}>{title}</h1>
          <div className="g-signin2" data-onsuccess="onSignIn" id="my-signin2" />
          <SimpleForm onSubmit={getAuthUserServer} />
        </div>
      </div>
    </div>);

export default connect(null, { getAuthUserServer: authUserServer })(injectSheet(styles)(LoginPage));
