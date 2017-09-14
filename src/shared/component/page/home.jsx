// @flow

// import React from 'react';
import Helmet from 'react-helmet';
import injectSheet from 'react-jss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getList } from '../../action/homePage';
import HomeTypeOverview from '../home-type-overview';
import { APP_NAME } from '../../config';

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
        backgroundColor: '#121212',
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

class HomePage extends Component {
    static defaultProps: Object;

    componentDidMount() {
        this.props.getList();
    }

    render() {
        return (<div>
          <Helmet
            meta={[
          { name: 'description', content: 'Hello App is an app to say hello' },
          { property: 'og:title', content: APP_NAME },
            ]}
          />
          <div className={this.props.classes.jumbotron}>
            <div className="container">
              <div className="row">
                <div className={this.props.classes['jumbotron-text']}>&mdash;&nbsp;RANGE&nbsp;&mdash;</div>
              </div>
              <div className="row">
                <div className={this.props.classes['jumbotron-text-banner']}>RIDE YOUR DREAM</div>
              </div>
              <div className="row">
                <div className={this.props.classes['jumbotron-text']}><span>In 1947 Soichiro Honda found a dream could be real. Where will you find yours?</span>
                </div>
              </div>
            </div>
          </div>
          <div className={this.props.classes.motoTypesOverview}>
            <div className="container">
              {Object.keys(this.props.listMotoOverview).map(elem => (
                <div className={this.props.classes.motoTypesEach} key={elem}>
                  <HomeTypeOverview type={elem.toLowerCase()} moto={this.props.listMotoOverview[elem]} />
                </div>))}
            </div>
          </div>
        </div>);
    }
}


HomePage.propTypes = {
  // eslint-disable-next-line react/require-default-props
    getList: PropTypes.func,
    listMotoOverview: PropTypes.objectOf(PropTypes.shape({
        random: PropTypes.objectOf(PropTypes.shape({
            name: PropTypes.string,
            image: PropTypes.string,
            description: PropTypes.string,
        })),
    })),
    classes: PropTypes.objectOf(PropTypes.shape({
        jumbotron: PropTypes.string,
        'jumbotron-text': PropTypes.string,
        'jumbotron-text-banner': PropTypes.string,
        motoTypesOverview: PropTypes.string,
        motoTypesEach: PropTypes.string,
    })),
};

HomePage.defaultProps = {
    listMotoOverview: {
        random: {
            name: '',
            image: '',
            description: '',
        },
    },
};

const mapStateToProps = state => ({
    listMotoOverview: state.listHome.get('listMoto').toJS(),
});

export default connect(mapStateToProps, { getList })(injectSheet(styles)(HomePage));
