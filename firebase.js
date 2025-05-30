const admin = require("firebase-admin");
const serviceAccount = require("./firebaseKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://TU-PROYECTO.firebaseio.com" // cámbialo
});

const db = admin.database();
module.exports = { db };
