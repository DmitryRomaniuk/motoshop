// @flow
const { Client } = require('pg');

const connectionString = process.env.DATABASE_URL;
const parseURI = connectionString.match(/(\w+):([\w\d]+)@([\w\d.-]+):(\d+)\/([\d\w]+)/);
const client = new Client({
    user: parseURI[1],
    password: parseURI[2],
    database: parseURI[5],
    port: parseURI[4],
    host: parseURI[3],
    ssl: true,
});
client.connect();

client.query('SELECT NOW()', (err, res) => {
    // eslint-disable-next-line no-console
    console.log(err, res);
    client.end();
});

const admin = require('firebase-admin');
const serviceAccount = require('./motoshop-firebase-access.json');


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://motoshop-632ec.firebaseio.com',
});

export const typesMotocycles = () => new Promise((resolve, reject) => {
    admin.database().ref('typesMoto').on('value', (snapshot) => {
        resolve(snapshot.val());
    }, (errorObject) => {
        console.log('The read failed: ' + errorObject.code);
        reject(errorObject);
    });
});

export const users = () => new Promise((resolve, reject) => {
    admin.database().ref('users').on('value', (snapshot) => {
        resolve(snapshot.val());
    }, (errorObject) => {
        console.log('The read failed: ' + errorObject.code);
        reject(errorObject);
    });
});

export const homeList = () => new Promise((resolve, reject) => {
    admin.database().ref('overview').on('value', (snapshot) => {
        resolve(snapshot.val());
    }, (errorObject) => {
        console.log('The read failed: ' + errorObject.code);
        reject(errorObject);
    });
});

export const homeRoutes = () => new Promise((resolve, reject) => {
    admin.database().ref('typesMoto').on('value', (snapshot) => {
        resolve(snapshot.val());
    }, (errorObject) => {
        console.log('The read failed: ' + errorObject.code);
        reject(errorObject);
    });
});
