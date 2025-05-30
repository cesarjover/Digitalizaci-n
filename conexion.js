const admin = require("firebase-admin");
const serviceAccount = require("./firebaseKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://TU_PROJECTO.firebaseio.com" // Cambia por tu URL real
});

const db = admin.database();

module.exports = { db };
