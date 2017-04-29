// @flow

import React from 'react';
import injectSheet from 'react-jss';
import { STATIC_PATH } from '../config';

const styles = {
  title: {
    composes: ['col-12'],
    margin: '10px',
    fontFamily: 'PFSExtraBlack',
    fontSize: '2rem',
  },
  motoAlignOverview: {
    composes: ['row'],
    display: 'flex',
    justifyContent: 'center',
    '& img': {
      width: '100%',
      maxWidth: '100%',
      height: 'auto',
    },
  },
  description: {
    composes: ['row'],
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'ProximaLight',
    fontSize: '2rem',
    margin: '10px',
  },
  motoLink: {
    fontFamily: 'ProximaSbold',
    color: 'white',
    margin: '10px',
    '&:hover': {
      color: 'white',
    },
  },
};

const HomeTypeOverview = ({ type, moto, classes }: {type: string, moto: Object, classes: Object}) =>
  <div className="container mt-4">
    <div className="row">
      <div className={classes.title}>
        {moto.name}
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" key={moto.name}>
        <div className="item">
          <div className={classes.motoAlignOverview}>
            <a href={type} className="image">
              <img src={STATIC_PATH + '/img/home/overview/' + moto.image} alt={moto.name} />
            </a>
          </div>
          <div className={classes.description}>
            <span>{moto.description}</span>
          </div>
          <div className={classes.motoAlignOverview}>
            <a href={type} className={classes.motoLink}><span>{moto.name}</span></a>
          </div>
        </div>
      </div>
    </div>
  </div>;

export default injectSheet(styles)(HomeTypeOverview);
