const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { db } = require("./firebase");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/save", async (req, res) => {
  try {
    const { startTime, endTime } = req.body;
    await db.ref("pomodoros").push({ startTime, endTime });
    res.send("Sesión guardada");
  } catch (err) {
    res.status(500).send("Error al guardar");
  }
});

app.listen(3000, () => console.log("Servidor en http://localhost:3000"));
