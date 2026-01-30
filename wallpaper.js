const body = document.getElementById("background");
const boton = document.querySelector(".random");
const slider = document.getElementById("color-slider");
const panel = document.getElementById("bar-color");

function obtenerContraste() {
  const colorFondo = window.getComputedStyle(body).backgroundColor;
  const rgb = colorFondo.match(/\d+/g);
  if (!rgb) return;

  const r = parseInt(rgb[0]);
  const g = parseInt(rgb[1]);
  const b = parseInt(rgb[2]);

  const brillo = (r * 299 + g * 587 + b * 114) / 1000;
  const colorTexto = brillo > 128 ? "black" : "white";

  boton.style.color = colorTexto;
  boton.style.borderColor = colorTexto;
  panel.style.color = colorTexto;

  const titulo = document.querySelector(".title");
  const searchInput = document.querySelector(".search-input");
  const lupaBtn = document.querySelector(".search-icon-button");

  if (titulo) titulo.style.color = colorTexto;

  if (searchInput) {
    searchInput.style.color = colorTexto;
    searchInput.style.borderColor = colorTexto;
  }

  if (lupaBtn) lupaBtn.style.color = colorTexto;
}

function generarColor() {
  const digitos = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += digitos[Math.floor(Math.random() * 16)];
  }
  return color;
}

boton.addEventListener("click", () => {
  const nuevoColor = generarColor();
  body.style.backgroundColor = nuevoColor;
  boton.style.backgroundColor = nuevoColor;
  obtenerContraste();
});

slider.addEventListener("input", () => {
  const hue = slider.value;
  const colorHsl = `hsl(${hue}, 70%, 50%)`;
  body.style.backgroundColor = colorHsl;
  boton.style.backgroundColor = colorHsl;
  obtenerContraste();
});

document.addEventListener("DOMContentLoaded", () => {
  // Inicialización
  const initialColor = window.getComputedStyle(body).backgroundColor;
  boton.style.backgroundColor = initialColor;
  obtenerContraste();
});
