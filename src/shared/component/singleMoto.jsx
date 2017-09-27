// @flow

import React from 'react';
import Helmet from 'react-helmet';
import injectSheet from 'react-jss';
import motos from '../each_moto';
import { STATIC_PATH } from '../config';

const styles = {
    title: {
        'text-align': 'center',
    },
    motoDblock: {
        composes: ['d-block', 'w-100'],
        height: '100%',
    },
};

const title = 'Hello Page';

const singleMoto = ({ match, classes }: { match: Object, classes: Object }) => {
    const idMoto = match.params.Id.replace(/\s|-|\+|\(|\)|\//g, '');
    const motorcycle = (motos[idMoto]) ? motos[idMoto] : {
        description: 'The website is under construction',
        count_img: 0,
    };
    return (<div className="container mt-4">
      <Helmet
        title={idMoto}
        meta={[
                    { name: 'description', content: 'A page to say hello' },
                    { property: 'og:title', content: title },
        ]}
      />
      <div>
        <h1 className={classes.title}>{motorcycle.description}</h1>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            {new Array(motorcycle.count_img).fill(0).map((elem, i) => (<li
              data-target="#carouselExampleIndicators"
              key={`${idMoto}_Indicators_${i.toString()}`}
              data-slide-to={i}
              className={(i === 0) ? 'active' : ''}
            />))}
          </ol>
          <div className="carousel-inner">
            {new Array(motorcycle.count_img).fill(0).map((elem, i) => (<div
              key={`${idMoto}_images_${i.toString()}`}
              className={(i === 0) ? 'carousel-item active' : 'carousel-item'}
            >
              <img
                className={classes.motoDblock}
                src={`${STATIC_PATH}/img/each_moto/${idMoto}/i${i + 1}.jpg`}
                alt={idMoto}
              />
            </div>))}
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
    );
};


export default injectSheet(styles)(singleMoto);
