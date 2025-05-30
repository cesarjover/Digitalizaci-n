const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { db } = require("./firebase");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Pomodoro backend funcionando");
});

// Guardar sesión Pomodoro
app.post("/save-session", async (req, res) => {
  try {
    const { startTime, endTime } = req.body;
    const ref = db.ref("sessions").push();
    await ref.set({ startTime, endTime });
    res.status(200).send("Sesión guardada");
  } catch (error) {
    res.status(500).send("Error al guardar sesión");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor escuchando en ${PORT}`));
