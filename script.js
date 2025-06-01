const peliculas = [
  { titulo: "Inception", genero: "Ciencia Ficción", año: 2010 },
  { titulo: "El Padrino", genero: "Drama", año: 1972 },
  { titulo: "Interstellar", genero: "Ciencia Ficción", año: 2014 },
  { titulo: "La La Land", genero: "Musical/Romance", año: 2016 },
  { titulo: "El Caballero Oscuro", genero: "Acción", año: 2008 },
  { titulo: "Parásitos", genero: "Thriller", año: 2019 },
];

function mostrarPeliculas() {
  const lista = document.getElementById("lista-peliculas");
  lista.innerHTML = "";

  peliculas.forEach(pelicula => {
    const li = document.createElement("li");
    li.textContent = `${pelicula.titulo} (${pelicula.año}) - ${pelicula.genero}`;
    lista.appendChild(li);
  });
}
