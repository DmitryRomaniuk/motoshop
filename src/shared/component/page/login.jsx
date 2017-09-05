// @flow

import React from 'react';
import Helmet from 'react-helmet';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';

import SimpleForm from '../SimpleForm';
import showResults from '../../action/showResults';
import { login } from '../../action/user';

const styles = {
  logo: {
    'font-family': 'PFSExtraBlack',
    'font-size': '2rem',
  },
};

const title = 'Login Page';

const LoginPage = ({ classes, showResults, login }: {
  classes: Object, showResults: Function, login: Function
  }) =>
    <div className="container mt-4">
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
          <SimpleForm onSubmit={showResults} />
        </div>
      </div>
    </div>;

export default connect(null, { showResults, login })(injectSheet(styles)(LoginPage));

// import React, { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';
// import { login } from './action/user';

// export class LoginContainer extends Component {
//   static defaultProps: Object;

//   onClick(e) {
//     e.preventDefault();
//     this.props.login({
//       name: this.refs.name.value,
//       isAdmin: this.refs.admin.checked,
//     });
//   }

//   render() {
//     return (
//       <div className="">
//         <div><input className={''} type="text" ref="name" placeholder="Enter your username" /></div>
//         <label className={''}><input type="checkbox" ref="admin" />Are you an Administrator?</label>
//         <div><button className={''} onClick={this.onClick}>Login</button></div>
//       </div>
//     );
//   }
// }

// LoginContainer.propTypes = {
//     // eslint-disable-next-line react/require-default-props
//   login: PropTypes.func,
// };

// export default connect(null, { login })(LoginContainer);
