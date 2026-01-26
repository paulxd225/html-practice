let miNumero = 1;

console.log(miNumero);

let suma = 5 + 5;
console.log(suma);
console.log(typeof miNumero);

let x = 1;

let y = ++x;
console.log(x);
// si ponemos ++x se ejecuta incrementado, si se pone x++ primero se ejecuta y luego se incrementa, sirve para decrementos tambien
!true; //negacion
!!true; //doble negado
//true === true; //devuelve true
true === false; //devuelve false
true !== false; //devuelve true
//false !== false; //devuelve false
//el triple igual "===" compara tambien si es dle mismo tipo

//operador AND es con &&
//operador OR es con ||
const port = process.env.PORT || 300;
console.log(port);
// console.log(port);

// sentencia if
let operacion = 3 + 1;
if (operacion >= 7) {
  console.log("es true");
} else if (operacion < 7 && operacion > 3) {
  console.log("el valor está entre 3 y 7");
} else {
  console.log("el valor es menor a 3");
}
//sentencia SWITCH
let operacion2 = 5 + 4;
switch (operacion2) {
  case 1:
    console.log("el resultado es 1");
    break;
  case 7:
    console.log("el resultado es 7");
    break;
  default:
    console.log("el resultado no esta contemplado");
}
//funciones
function saludar(nombre = "carlos") {
  return `hola ${nombre}`;
}
saludar("carlos");
console.log(saludar("carlos"));

const saludo = saludar("carlos");
console.log(saludo);

function inventario(name) {
  this.name = name;
  this.articulos = [];
}
inventario.prototype.getNombre = function () {
  return this.name;
};
inventario.prototype.add = function (articulo, cantidad) {
  this.articulos[articulo] = cantidad;
};
inventario.prototype.cantidad = function (articulo) {
  return this.articulos[articulo];
};
let libros = new inventario("libros");
libros.getNombre();
libros.add("aprendiendo javascript", 5);
libros.cantidad("aprendiendo javascript");
let nameList = libros.getNombre();
let nameArt = "aprendiendo javascript";
let cantArt = libros.cantidad(nameArt);
console.log(
  `nombre del inventario: ${nameList} | articulo: ${nameArt} | cantidad: ${cantArt}`,
);

//clases
class inventario2 {
  constructor(name) {
    this.name = name;
    this.articulos = [];
  }
  getNombre() {
    return this.name;
  }
  add(articulo, cantidad) {
    this.articulos[articulo] = cantidad;
  }
  cantidad(articulo) {
    return this.articulos[articulo];
  }
}
let cartas = new inventario2("cartas");

cartas.add("palos de cartas", 4);
cartas.cantidad("palos de cartas");
console.log(
  `nombre del inventario: ${cartas.getNombre()} | subdivision: palos de cartas | cantidad: ${cartas.cantidad("palos de cartas")}`,
);

//bucle while
function bucleWhile(num) {
  let i = 0;
  while (i <= num) {
    console.log(i);
    i++;
  }
}
bucleWhile(11);

//bucle Do While (haz la primera ejecucion, luego compruebas y me das el resultado final)
function doWhile(num) {
  let i = 0;
  do {
    console.log(i);
    i++;
  } while (i < num);
}
doWhile(5);

//bucle for
//estructura: for(inicializacion; condicion;actualizacion){lo que se quiere que haga}
function bucleFor(num) {
  for (let i = 0; i < num; i++) {
    console.log(i);
  }
}
bucleFor(7);

//arrays
const obj = {
  unArray: new Array(10),
};
const unArray = obj.unArray;
for (let i = 0, longitud = unArray.length; i < longitud; i++) {
  obj.unArray[i] = "hola";
}
//iteraciones de arrays de manera secuencial
