const boton = document.querySelector(".random");
const body = document.getElementById("background");

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
});

const slider = document.getElementById("color-slider");
slider.addEventListener("input", () => {
  const hue = slider.value;
  const colorHsl = `hsl(${hue}, 70%, 50%)`;
  body.style.backgroundColor = colorHsl;
});
