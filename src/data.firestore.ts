import * as admin from 'firebase-admin'

//= Initialize firebase db connection
var serviceAccount = require("../serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const db = admin.firestore();

export const exerciseCollection = db.collection("exercise");
