// @flow

import React from 'react';
import Helmet from 'react-helmet';
import injectSheet from 'react-jss';

import ModalExample from '../modal-example';
import HomeTypeOverview from '../home-type-overview';
import { APP_NAME } from '../../config';
import listMotoOverview from '../../homeOverviewMotoTypes.json';

const styles = {
  hoverMe: {
    '&:hover': {
      color: 'red',
    },
  },
  '@media (max-width: 800px)': {
    resizeMe: {
      color: 'red',
    },
  },
  specialButton: {
    composes: ['btn', 'btn-primary'],
    backgroundColor: 'limegreen',
  },
  motoTypesOverview: {
    color: 'white',
    backgroundColor: '#292b2c',
    border: '1px solid transparent',
  },
  motoTypesEach: {
    composes: ['row'],
    margin: '20px',
    borderBottom: '1px solid white',
    '&:last-child': {
      borderBottom: '1px solid transparent',
    },
  },
  jumbotron: {
    composes: ['jumbotron'],
    backgroundColor: '#f4f3f8',
    marginBottom: '0px',
  },
  'jumbotron-text': {
    fontFamily: 'ProximaLight',
    display: 'block',
    margin: '0 auto',
    fontSize: '1.5rem',
  },
  'jumbotron-text-banner': {
    composes: ['display-2'],
    fontFamily: 'ProximaSbold',
    display: 'block',
    margin: '0 auto',
    fontSize: '7rem',
    color: 'red',
  },
};

const HomePage = ({ classes }: { classes: Object }) =>
  <div>
    <Helmet
      meta={[
        { name: 'description', content: 'Hello App is an app to say hello' },
        { property: 'og:title', content: APP_NAME },
      ]}
    />
    <div className={classes.jumbotron}>
      <div className="container">
        <div className="row">
          <div className={classes['jumbotron-text']}>&mdash;&nbsp;RANGE&nbsp;&mdash;</div>
        </div>
        <div className="row">
          <div className={classes['jumbotron-text-banner']}>RIDE YOUR DREAM</div>
        </div>
        <div className="row">
          <div className={classes['jumbotron-text']}><span>In 1947 Soichiro Honda found a dream could be real. Where will you find yours?</span>
          </div>
        </div>
      </div>
    </div>
    <div className={classes.motoTypesOverview}>
      <div className="container">
        <div className={classes.motoTypesEach}>
          <HomeTypeOverview type="super-sport" moto={listMotoOverview.SUPER_SPORT} />
        </div>
        <div className={classes.motoTypesEach}>
          <HomeTypeOverview type="sport-touring" moto={listMotoOverview.SPORT_TOURING} />
        </div>
        <div className={classes.motoTypesEach}>
          <HomeTypeOverview type="touring" moto={listMotoOverview.TOURING} />
        </div>
        <div className={classes.motoTypesEach}>
          <HomeTypeOverview type="adventure" moto={listMotoOverview.ADVENTURE} />
        </div>
        <div className={classes.motoTypesEach}>
          <HomeTypeOverview type="street" moto={listMotoOverview.STREET} />
        </div>
        <div className={classes.motoTypesEach}>
          <HomeTypeOverview type="super-touring" moto={listMotoOverview.CUSTOM} />
        </div>
        <div className={classes.motoTypesEach}>
          <HomeTypeOverview type="super-touring" moto={listMotoOverview.v125CC} />
        </div>
        <div className={classes.motoTypesEach}>
          <HomeTypeOverview type="off-road" moto={listMotoOverview.OFF_ROAD} />
        </div>
        <div className={classes.motoTypesEach}>
          <HomeTypeOverview type="scooter" moto={listMotoOverview.SCOOTER} />
        </div>
      </div>
    </div>
    <ModalExample />
  </div>;

export default injectSheet(styles)(HomePage);
