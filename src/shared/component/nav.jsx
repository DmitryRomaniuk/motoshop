// @flow

import $ from 'jquery';
import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';
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
  PROTECTED_ROUTE,
  ADMIN_ROUTE,
} from '../routes';
import { logout } from '../action/user';

const getUserName = (user) => {
    if (user.data) return `Welcome ${user.data.name}!`;
    return 'Hello guest!';
};
const handleNavLinkClick = () => {
    $('body').scrollTop(0);
    $('.js-navbar-collapse').collapse('hide');
};

const UserName = ({ user, classComponent }: {user: Object, classComponent: string}) => (<div className={classComponent + ' nav-link brand-text'} >{getUserName(user)}</div>);
const LoginLink = ({ user }: {user: ?Object}) => ((!user) ? <NavLink className="nav-link" to={LOGIN_ROUTE}>Login</NavLink> : null);
const LogoutLink = ({ user, logoutUser }: { user: ?Object, logoutUser: Function }) => ((!user) ? null : <NavLink to="/" className="nav-link" onClick={logoutUser}>Logout</NavLink>);
const ProtectedLink = ({ user, classComponent }: { user: Object, classComponent: string }) => ((user.data) ? (
  <li className={classComponent}>
    <NavLink to={PROTECTED_ROUTE} className="nav-link" onClick={handleNavLinkClick}>My cabinet</NavLink>
  </li>
    ) : null);

const AdminLink = ({ user, classComponent }: {user: Object, classComponent: string}) => {
    if (!user.data) return null;
    return (user.data.isAdmin) ? (<li className={classComponent}>
      <NavLink to={ADMIN_ROUTE} className="nav-link" onClick={handleNavLinkClick}>Admin cabinet</NavLink>
    </li>) : null;
};

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


const Nav = ({ classes, logoutUser, user }: { classes: Object, logoutUser: Function, user: Object }) =>
  (<nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".js-navbar-collapse">
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
        ].map(link => (
          <li className={classes.navItem} key={link.route}>
            <NavLink to={link.route} className="nav-link" activeStyle={{ color: 'white' }} exact onClick={handleNavLinkClick}>{link.label}</NavLink>
          </li>
        ))}
        <UserName user={user} classComponent={classes.navItem} />
        <ProtectedLink user={user} classComponent={classes.navItem} />
        <AdminLink user={user} classComponent={classes.navItem} />
        <li className={classes.navItem}>
          <LoginLink user={user.data} />
          <LogoutLink user={user.data} logoutUser={logoutUser} />
        </li>
      </ul>
    </div>
  </nav>);

const mapStateToProps = state => ({
    user: state.user.toJS(),
});

const mapDispatchToProps = {
    logoutUser: logout,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(Nav)));
