// @flow
const { Client } = require('pg');
const jwt = require('jsonwebtoken');

const connectionString = process.env.DATABASE_URL;
const parseURI = connectionString.match(/(\w+):([\w\d]+)@([\w\d.-]+):(\d+)\/([\d\w]+)/);
const client = new Client({
    user: parseURI[1],
    password: parseURI[2],
    database: parseURI[5],
    port: parseURI[4],
    host: parseURI[3],
    ssl: {
        rejectUnauthorized: false,
    },
});

client.connect();

const createTableText = `
CREATE TABLE IF NOT EXISTS users (
  name varchar(160),
  hash varchar(320)
);
`;
const newUser = { user: 'kanumowa@gmail.com', password: 'password2' };

client.query(createTableText)
    .then(() => {
        // const hashsumm = jwt.sign({ data: newUser.password }, 'secret', { algorithm: 'HS512' });
        // return client.query('INSERT INTO users (name, hash) VALUES($1,$2)', [newUser.user, hashsumm])
        //     .catch(e => console.error(e.stack));
    })
    .then(() => client.query('SELECT * FROM users WHERE users.name = $1', [newUser.user])
            .then(({ rows }) => {
                rows.forEach(row => console.log(jwt.verify(row.hash, 'secret', { algorithm: 'HS512' }).data));
            })
            .catch(e => console.error(e.stack)))
    .catch(e => console.error(e));


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
