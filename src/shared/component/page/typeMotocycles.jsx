// @flow

import React from 'react';
import Helmet from 'react-helmet';
import injectSheet from 'react-jss';
import { STATIC_PATH } from '../../config';

const styles = {
  title: {
    composes: ['col-12'],
    'font-family': 'PFSExtraBlack',
    'font-size': '2rem',
  },
  motoAlign: {
    composes: ['row'],
    display: 'flex',
    'justify-content': 'center',
  },
};

const title = 'Hello Page';

const TypeMotocycles = ({ route, motoList, classes }: {route: string, motoList: Object, classes: Object}) =>
  <div className="container mt-4">
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'A page to say hello' },
        { property: 'og:title', content: title },
      ]}
    />
    <div className="row">
      <div className={classes.title}>
        {motoList.name}
      </div>
    </div>
    <div className="row">
      {motoList.motos.map(moto => (
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2" key={moto.name}>
          <div className="item">
            <div className={classes.motoAlign}>
              <a href={route + '/' + moto.name} className="image">
                <img src={STATIC_PATH + '/img/archive/' + moto.image} alt={moto.name} height="90" />
              </a>
            </div>
            <div className={classes.motoAlign}>
              <a href={route + '/' + moto.name.replace(/\//gim, '_')} className="name"><span>{moto.name}</span></a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>;

export default injectSheet(styles)(TypeMotocycles);
