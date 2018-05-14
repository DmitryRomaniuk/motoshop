// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, withRouter } from 'react-router';
import { Route, Redirect } from 'react-router-dom';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import TypeMotocycles from './component/typeMotocycles';
import LoginPage from './component/page/login';
import AdminComponent from './component/page/admin';
import ProtectedComponent from './component/page/protected';
import HomePage from './component/page/home';
import Footer from './component/footer';
import Nav from './component/nav';
import NotFoundPage from './component/page/not-found';
import { APP_NAME } from './config';
import * as routes from './routes';
import { getRoutes } from './action/homePage';

const PrivateRoute = ({ component: Component, authData, ...rest }) => (
  <Route
    {...rest}
    render={props => (authData !== null ? <Component {...props} /> : <Redirect to='/login' />)}
  />
)

class App extends Component {
    static defaultProps: Object;

    componentDidMount() {
        this.props.getListRoutes();
    }

    render() {
        return (
          <div style={{ paddingTop: 54 }}>
            <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
            <Nav />
            <Switch>
              <Redirect from="/home" to="/" />
              <Route exact path={routes.HOME_PAGE_ROUTE} component={HomePage} />
              {
                    Object.keys(this.props.motolist).map(elem => (<Route key={routes[elem]} path={routes[elem]} render={props => <TypeMotocycles {...props} motoList={this.props.motolist[elem]} />} />))
                }
              <Route path={routes.LOGIN_ROUTE} component={LoginPage} />
              <PrivateRoute path={routes.PROTECTED_ROUTE} component={ProtectedComponent} authData={this.props.authData} />
              <PrivateRoute path={routes.ADMIN_ROUTE} component={AdminComponent} authData={this.props.authData} />
              <Route component={NotFoundPage} />
            </Switch>
            <Footer />
          </div>);
    }
}


App.propTypes = {
  // eslint-disable-next-line react/require-default-props
    getListRoutes: PropTypes.func,
    authData: PropTypes.oneOfType([null, PropTypes.object]),
    motolist: PropTypes.objectOf(PropTypes.shape({
        SUPER_SPORT_ROUTE: PropTypes.objectOf(PropTypes.shape({
            name: PropTypes.string,
            motos: PropTypes.arrayOf(PropTypes.shape({
                name: PropTypes.string,
                image: PropTypes.string,
            })),
        })),
    })),
};

App.defaultProps = {
    motolist: {},
};

const mapStateToProps = state => ({
    motolist: state.listHome.get('listRoutes').toJS(),
    authData: state.user.get('data'),
});

export default withRouter(connect(mapStateToProps, { getListRoutes: getRoutes })(App));
