
const peliculas = [
  {
    titulo: "Película de ejemplo",
    archivo: "videos/ejemplo.mp4",
    poster: "posters/ejemplo.jpg",
    descripcion: "Una película de prueba para Micine.",
    pagina: "peliculas/ejemplo.html"
  }
];

const contenedor = document.getElementById("contenedor-peliculas");
const buscador = document.getElementById("buscador");

function mostrarPeliculas(filtradas) {
  contenedor.innerHTML = "";
  filtradas.forEach(p => {
    const div = document.createElement("div");
    div.className = "pelicula";
    div.innerHTML = `<a href="${p.pagina}"><img src="${p.poster}" alt="${p.titulo}"></a>`;
    contenedor.appendChild(div);
  });
}

buscador.addEventListener("input", () => {
  const filtro = buscador.value.toLowerCase();
  const resultado = peliculas.filter(p => p.titulo.toLowerCase().includes(filtro));
  mostrarPeliculas(resultado);
});

mostrarPeliculas(peliculas);
