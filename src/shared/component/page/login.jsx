// @flow

import React from 'react';
import Helmet from 'react-helmet';
import injectSheet from 'react-jss';
import SimpleForm from '../form/SimpleForm';

const styles = {
    logo: {
        'font-family': 'PFSExtraBlack',
        'font-size': '2rem',
    },
};

const title = 'Login Page';

const LoginPage = ({ classes }: { classes: Object, }) =>
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
          <SimpleForm />
        </div>
      </div>
    </div>);

export default injectSheet(styles)(LoginPage);
