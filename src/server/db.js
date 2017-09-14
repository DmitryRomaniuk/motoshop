// @flow

// import mongoose from 'mongoose';

// mongoose.Promise = global.Promise;

// mongoose.connect(process.env.MONGODB_URI);

// /* eslint-disable no-console */
// mongoose.connection.on('connected', () => console.log('DB connected.'));
// mongoose.connection.on('error', err => console.error(err));
// mongoose.connection.on('disconnected', () => console.log('DB disconnected.'));
// /* eslint-enable no-console */

// process.on('SIGINT', () => {
//   mongoose.connection.close(() => {
//     process.exit();
//   });
// });

// /* eslint-disable import/no-unresolved */
// import * as admin from 'firebase-admin';
// import serviceAccount from '../../motoshop-firebase-access.json';
// /* eslint-disable import/no-unresolved */

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: 'https://motoshop-632ec.firebaseio.com',
// });
/* eslint-disable no-console */
const admin = require('firebase-admin');

const serviceAccount = require('../../motoshop-firebase-access.json');


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://motoshop-632ec.firebaseio.com',
  // databaseAuthVariableOverride: {
  //   uid: 'Xep3lILIfkMuaVoUwDAD4PjYSYl1',
  // },
});

export const typesMotocycles = () => new Promise((resolve, reject) => {
    admin.database().ref('typesMoto').on('value', (snapshot) => {
    // console.log(snapshot.val());
        resolve(snapshot.val());
    }, (errorObject) => {
        console.log('The read failed: ' + errorObject.code);
        reject(errorObject);
    });
});

// const getUsers = db.ref('users');
export const users = () => new Promise((resolve, reject) => {
    admin.database().ref('users').on('value', (snapshot) => {
    // console.log(snapshot.val());
        resolve(snapshot.val());
    }, (errorObject) => {
        console.log('The read failed: ' + errorObject.code);
        reject(errorObject);
    });
});

export const homeList = () => new Promise((resolve, reject) => {
    admin.database().ref('overview').on('value', (snapshot) => {
    // console.log(snapshot.val());
        resolve(snapshot.val());
    }, (errorObject) => {
        console.log('The read failed: ' + errorObject.code);
        reject(errorObject);
    });
});

export const homeRoutes = () => new Promise((resolve, reject) => {
    admin.database().ref('typesMoto').on('value', (snapshot) => {
    // console.log(snapshot.val());
        resolve(snapshot.val());
    }, (errorObject) => {
        console.log('The read failed: ' + errorObject.code);
        reject(errorObject);
    });
});
