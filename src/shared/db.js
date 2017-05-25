/* eslint-disable import/no-unresolved */
const admin = require('firebase-admin');
const serviceAccount = require('../../motoshop-firebase-access.json');
/* eslint-disable import/no-unresolved */

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://motoshop-632ec.firebaseio.com',
});

const db = admin.database();
const typesMoto = db.ref('typesMoto');
typesMoto.once('value').then((snapshot) => {
  /* eslint-disable no-console */
  console.log(snapshot.val());
  /* eslint-enable no-console */
});
