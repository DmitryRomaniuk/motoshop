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
import {
  HOME_PAGE_ROUTE,
  SUPER_SPORT_ROUTE,
  SPORT_TOURING_ROUTE,
  TOURING_ROUTE,
  ADVENTURE_ROUTE,
  STREET_ROUTE,
  OFF_ROAD_ROUTE,
  SCOOTER_ROUTE,
  CUSTOM_ROUTE,
  V125CC_ROUTE,
  ATV_ROUTE,
  LOGIN_ROUTE,
  PROTECTED_ROUTE,
  ADMIN_ROUTE,
} from './routes';
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
            <Route exact path={HOME_PAGE_ROUTE} component={HomePage} />
            <Route path={SUPER_SPORT_ROUTE} render={() => <TypeMotocycles route={SUPER_SPORT_ROUTE} motoList={this.props.motolist.SUPER_SPORT_ROUTE} />} />
            <Route path={SPORT_TOURING_ROUTE} render={() => <TypeMotocycles route={SPORT_TOURING_ROUTE} motoList={this.props.motolist.SPORT_TOURING_ROUTE} />} />
            <Route path={TOURING_ROUTE} render={() => <TypeMotocycles route={TOURING_ROUTE} motoList={this.props.motolist.TOURING_ROUTE} />} />
            <Route path={ADVENTURE_ROUTE} render={() => <TypeMotocycles route={ADVENTURE_ROUTE} motoList={this.props.motolist.ADVENTURE_ROUTE} />} />
            <Route path={STREET_ROUTE} render={() => <TypeMotocycles route={STREET_ROUTE} motoList={this.props.motolist.STREET_ROUTE} />} />
            <Route path={OFF_ROAD_ROUTE} render={() => <TypeMotocycles route={OFF_ROAD_ROUTE} motoList={this.props.motolist.OFF_ROAD_ROUTE} />} />
            <Route path={SCOOTER_ROUTE} render={() => <TypeMotocycles route={SCOOTER_ROUTE} motoList={this.props.motolist.SCOOTER_ROUTE} />} />
            <Route path={CUSTOM_ROUTE} render={() => <TypeMotocycles route={CUSTOM_ROUTE} motoList={this.props.motolist.CUSTOM_ROUTE} />} />
            <Route path={V125CC_ROUTE} render={() => <TypeMotocycles route={V125CC_ROUTE} motoList={this.props.motolist.V125CC_ROUTE} />} />
            <Route path={ATV_ROUTE} render={() => <TypeMotocycles route={ATV_ROUTE} motoList={this.props.motolist.ATV_ROUTE} />} />
            <Route path={LOGIN_ROUTE} component={LoginPage} />
            <Route path={PROTECTED_ROUTE} component={ProtectedComponent} />
            <Route path={ADMIN_ROUTE} component={AdminComponent} />
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
