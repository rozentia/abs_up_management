import * as admin from 'firebase-admin'
import * as functions from 'firebase-functions'

//= Initialize firebase db connection
var serviceAccount = require("../serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://absshuffler.firebaseio.com/",
});

export const db = admin.firestore();

export const exercises = db.collection("exercises");
