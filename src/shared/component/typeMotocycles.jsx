// @flow

import React from 'react';
import { Link, Route } from 'react-router-dom';
import Helmet from 'react-helmet';
import injectSheet from 'react-jss';
import singleMoto from './singleMoto';

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

const TypeMotocycles = ({ match, motoList, classes }: {motoList: Object, match: Object, classes: Object}) =>
  (<div className="container mt-4">
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'A page to say hello' },
        { property: 'og:title', content: title },
      ]}
    />
    <Route path={`${match.url}/:Id`} component={singleMoto} />
    <Route
      exact
      path={match.url}
      render={() => (
        <div>
          <div className={classes.title}>
            {motoList.name}
          </div>
          <div className="row">
            {motoList.motos.map(moto => (
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2" key={moto.name}>
                <div className="item">
                  <div className={classes.motoAlign}>
                    <Link to={match.url + '/' + moto.name.replace(/\//gim, '')} className="image">
                      <img src={(moto.image) ? `https://firebasestorage.googleapis.com/v0/b/motoshop-632ec.appspot.com/o/archive%2F${moto.image}?alt=media` : ''} alt={moto.name} height="90" />
                    </Link>
                  </div>
                  <div className={classes.motoAlign}>
                    <Link to={match.url + '/' + moto.name.replace(/\//gim, '')} className="name"><span>{moto.name}</span></Link>
                  </div>
                </div>
              </div>
        ))}
          </div>
        </div>
    )}
    />
  </div>);

export default injectSheet(styles)(TypeMotocycles);
