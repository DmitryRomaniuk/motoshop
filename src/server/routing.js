// @flow

import jwt from 'jsonwebtoken';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

import {
  homePage,
  helloPage,
  helloAsyncPage,
  helloEndpoint,
} from './controller';

import {
  typesMotocycles,
  users,
  homeList,
  homeRoutes,
  User,
} from './db';

import {
  HOME_PAGE_ROUTE,
  SUPER_SPORT_ROUTE,
  SPORT_TOURING_ROUTE,
  TOURING_ROUTE,
  ADVENTURE_ROUTE,
  STREET_ROUTE,
  OFF_ROAD_ROUTE,
  SCOOTER_ROUTE,
  ATV_ROUTE,
  CUSTOM_ROUTE,
  V125CC_ROUTE,
  LOGIN_ROUTE,
//  PROTECTED_ROUTE,
//  ADMIN_ROUTE,
  HELLO_PAGE_ROUTE,
  HELLO_ASYNC_PAGE_ROUTE,
  HOME_PAGE_GET_ROUTES_LIST_ROUTE,
  helloEndpointRoute,
} from '../shared/routes';

import renderApp from './render-app';

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
},
    ((username, password, done) => {
        User.findOne({ where: { email: username } }).then((user) => {
            if (!user.get('email')) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (user.get('password') !== password) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        })
        .catch(err => done(err));
    }),
    ));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

export default (app: Object) => {
    app.get(HOME_PAGE_ROUTE, (req, res) => {
        res.send(renderApp(req.url, homePage()));
    });

    app.get(SUPER_SPORT_ROUTE, (req, res) => {
        res.send(renderApp(req.url));
    });

    app.get(SPORT_TOURING_ROUTE, (req, res) => {
        res.send(renderApp(req.url));
    });

    app.get(TOURING_ROUTE, (req, res) => {
        res.send(renderApp(req.url));
    });

    app.get(ADVENTURE_ROUTE, (req, res) => {
        res.send(renderApp(req.url));
    });

    app.get(STREET_ROUTE, (req, res) => {
        res.send(renderApp(req.url));
    });

    app.get(OFF_ROAD_ROUTE, (req, res) => {
        res.send(renderApp(req.url));
    });

    app.get(SCOOTER_ROUTE, (req, res) => {
        res.send(renderApp(req.url));
    });

    app.get(ATV_ROUTE, (req, res) => {
        res.send(renderApp(req.url));
    });

    app.get(CUSTOM_ROUTE, (req, res) => {
        res.send(renderApp(req.url));
    });

    app.get(V125CC_ROUTE, (req, res) => {
        res.send(renderApp(req.url));
    });

    app.get(LOGIN_ROUTE, (req, res) => {
        res.send(renderApp(req.url));
    });

    app.post(LOGIN_ROUTE, passport.authenticate('local', { session: false }), (req, res) => {
        const promise = new Promise((resolve, reject) => {
            jwt.sign({ data: req.body }, 'secret', { algorithm: 'HS512' }, (err, token) => {
                if (err) reject(err);
                resolve(token);
            });
        });
        return promise
            .then((result) => {
                res.cookie('token', result, { maxAge: 900000, httpOnly: true });
                res.json(result);
            })
            .catch(err => res.json(err));
        // res.redirect(HOME_PAGE_ROUTE);
    });

    app.get(LOGIN_ROUTE, (req, res) => {
        res.send(renderApp(req.url));
    });

    app.get(LOGIN_ROUTE, (req, res) => {
        res.send(renderApp(req.url));
    });

    app.get(HELLO_PAGE_ROUTE, (req, res) => {
        res.send(renderApp(req.url, helloPage()));
    });

    app.get(HELLO_ASYNC_PAGE_ROUTE, (req, res) => {
        res.send(renderApp(req.url, helloAsyncPage()));
    });

    app.get(helloEndpointRoute(), (req, res) => {
        res.json(helloEndpoint(req.params.num));
    });

    app.get('/home-list', (req, res) => {
        homeList().then(result => res.json(result));
    });

    app.get(HOME_PAGE_GET_ROUTES_LIST_ROUTE, (req, res) => {
        homeRoutes().then(result => res.json(result));
    });

    app.get('/typesMoto', (req, res) => {
        typesMotocycles().then(result => res.json(result));
    });

    app.get('/users', (req, res) => {
        users().then(result => res.json(result));
    });

    app.get('/500', () => {
        throw Error('Fake Internal Server Error');
    });

    app.get('*', (req, res) => {
        res.status(404).send(renderApp(req.url));
    });

  // eslint-disable-next-line no-unused-vars
    app.use((err, req, res, next) => {
    // eslint-disable-next-line no-console
        console.error(err.stack);
        res.status(500).send('Something went wrong!');
    });
};
