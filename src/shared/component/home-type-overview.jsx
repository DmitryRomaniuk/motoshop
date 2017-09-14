// @flow

import React from 'react';
import { Link } from 'react-router-dom';
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
  (<div className="container mt-4">
    <div className="row">
      <div className={classes.title}>
        {moto.name}
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" key={moto.name}>
        <div className="item">
          <div className={classes.motoAlignOverview}>
            <Link to={type} className="image">
              <img src={STATIC_PATH + '/img/home/overview/' + moto.image} alt={moto.name} />
            </Link>
          </div>
          <div className={classes.description}>
            <span>{moto.description}</span>
          </div>
          <div className={classes.motoAlignOverview}>
            <Link to={type} className={classes.motoLink}><span>{moto.name}</span></Link>
          </div>
        </div>
      </div>
    </div>
  </div>);

export default injectSheet(styles)(HomeTypeOverview);
