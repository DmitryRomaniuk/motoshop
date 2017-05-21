const admin = require('firebase-admin');
const serviceAccount = require('../../motoshop-firebase-access.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://motoshop-632ec.firebaseio.com',
});

const db = admin.database();
const typesMoto = db.ref('typesMoto');
typesMoto.once('value').then((snapshot) => {
  console.log(snapshot.val());
});
