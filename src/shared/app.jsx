// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, withRouter } from 'react-router';
import { Route } from 'react-router-dom';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import TypeMotocycles from './component/page/typeMotocycles';
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

class App extends Component {
    static defaultProps: Object;

    componentDidMount() {
        this.props.getListRoutes();
    }

    render() {
        return (<div style={{ paddingTop: 54 }}>
          <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
          <Nav />
          <Switch>
            <Route exact path={routes.HOME_PAGE_ROUTE} component={HomePage} />
            {
                  Object.keys(this.props.motolist).map(elem => (<Route path={routes[elem]} render={props => <TypeMotocycles {...props} motoList={this.props.motolist[elem]} />} />))
              }
            <Route path={routes.LOGIN_ROUTE} component={LoginPage} />
            <Route path={routes.PROTECTED_ROUTE} component={ProtectedComponent} />
            <Route path={routes.ADMIN_ROUTE} component={AdminComponent} />
            <Route component={NotFoundPage} />
          </Switch>
          <Footer />
        </div>);
    }
}


App.propTypes = {
  // eslint-disable-next-line react/require-default-props
    getListRoutes: PropTypes.func,
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
});

export default withRouter(connect(mapStateToProps, { getListRoutes: getRoutes })(App));
