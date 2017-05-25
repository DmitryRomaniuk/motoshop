// @flow

import $ from 'jquery';
import React from 'react';
import injectSheet from 'react-jss';
import { Link, NavLink } from 'react-router-dom';
import {
  HOME_PAGE_ROUTE,
  SUPER_SPORT_ROUTE,
  SPORT_TOURING_ROUTE,
  TOURING_ROUTE,
  ADVENTURE_ROUTE,
  STREET_ROUTE,
  CUSTOM_ROUTE,
  V125CC_ROUTE,
  OFF_ROAD_ROUTE,
  SCOOTER_ROUTE,
  LOGIN_ROUTE,
  ATV_ROUTE,
} from '../routes';

const styles = {
  navbar_brand_icon: {
    composes: ['navbar-brand'],
    color: 'red',
  },
  navbar_nav: {
    composes: ['navbar-nav', 'mr-auto'],
    'justify-content': 'flex-start',
    width: '100%',
    'padding-right': '70px',
  },
  navItem: {
    composes: ['nav-item'],
    '&:last-child': {
      position: 'absolute',
      right: '1rem',
    },
  },
};

const handleNavLinkClick = () => {
  $('body').scrollTop(0);
  $('.js-navbar-collapse').collapse('hide');
};

const Nav = ({ classes }: { classes: Object }) =>
  <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
    <button className="navbar-toggler navbar-toggler-right" type="button" role="button" data-toggle="collapse" data-target=".js-navbar-collapse">
      <span className="navbar-toggler-icon" />
    </button>
    <Link to={HOME_PAGE_ROUTE} className={classes.navbar_brand_icon}>
      &nbsp;
    </Link>
    <div className="js-navbar-collapse collapse navbar-collapse">
      <ul className={classes.navbar_nav}>
        {[
          { route: HOME_PAGE_ROUTE, label: 'Home' },
          { route: SUPER_SPORT_ROUTE, label: 'Super sport' },
          { route: SPORT_TOURING_ROUTE, label: 'Sport touring' },
          { route: TOURING_ROUTE, label: 'Touring' },
          { route: ADVENTURE_ROUTE, label: 'Adventure' },
          { route: STREET_ROUTE, label: 'Street' },
          { route: CUSTOM_ROUTE, label: 'Custom' },
          { route: V125CC_ROUTE, label: '125CC' },
          { route: OFF_ROAD_ROUTE, label: 'Off road' },
          { route: SCOOTER_ROUTE, label: 'Scooter' },
          { route: ATV_ROUTE, label: 'ATV' },
          { route: LOGIN_ROUTE, label: 'Login' },
        ].map(link => (
          <li className={classes.navItem} key={link.route}>
            <NavLink to={link.route} className="nav-link" activeStyle={{ color: 'white' }} exact onClick={handleNavLinkClick}>{link.label}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  </nav>;

export default injectSheet(styles)(Nav);
