// @flow

import compression from 'compression';
import express from 'express';
import { Server } from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import routing from './routing';
import { STATIC_PATH, isProd } from '../shared/config';
import './db';

dotenv.config();
const WEB_PORT = process.env.PORT;

const app = express();
// flow-disable-next-line
const http = Server(app);

app.use(compression());

app.use(cookieParser());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.text({ type: 'text/html' }));
app.use(STATIC_PATH, express.static('dist'));
app.use(STATIC_PATH, express.static('public'));

routing(app);

http.listen(WEB_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${String(WEB_PORT)} ${isProd ? '(production)' :
    '(development).\nKeep "npm run dev:wds" running in an other terminal'}.`);
});
