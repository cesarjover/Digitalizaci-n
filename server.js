const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const libros = [
  { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
  { titulo: "1984", autor: "George Orwell" },
  { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
  { titulo: "Rayuela", autor: "Julio Cortázar" }
];

app.get("/libros", (req, res) => {
  res.json(libros);
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
