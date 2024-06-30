let list = ["APPLE","HAUSE","UNDER","FALSE","ELISE"];
let intentos = 6;
let listaOpc = Math.floor(Math.random()*list.length);
let palabra = list[listaOpc];

const BUTTON = document.getElementById("guess-button");

BUTTON.addEventListener("click", intentar);
console.log(palabra);

function intentar() {
  const INTENTO = leerIntento();
  if (INTENTO.length != 5) {
    alert("Escoge una palabra de 5 letras.");
  } else {
    if (INTENTO === palabra) {
      terminar("<h1>GANASTE!</h1>");
      return;
    }
    for (let i in palabra) {
      if (INTENTO[i] === palabra[i]) {
        console.log(INTENTO[i], "VERDE");
      } else if (palabra.includes(INTENTO[i])) {
        console.log(INTENTO[i], "AMARILLO");
      } else {
        console.log(INTENTO[i], "GRIS");
      }
    }
    intentos--;
    if (intentos === 0) {
      terminar("<h1>PERDISTE!</h1>");
    }

    const GRID = document.getElementById("grid");
    const ROW = document.createElement("div");
    ROW.className = "row";
    for (let i in palabra) {
      const SPAN = document.createElement("span");
      SPAN.className = "letter";
      if (INTENTO[i] === palabra[i]) {
        SPAN.innerHTML = INTENTO[i];
        SPAN.style.backgroundColor = "#79b851";
      } else if (palabra.includes(INTENTO[i])) {
        SPAN.innerHTML = INTENTO[i];
        SPAN.style.backgroundColor = "#f3c237";
      } else {
        SPAN.innerHTML = INTENTO[i];
        SPAN.style.backgroundColor = "#a4aec4";
      }
      ROW.appendChild(SPAN);
    }
    GRID.appendChild(ROW);
  }

}

function leerIntento() {
let intento = document.getElementById("guess-input");
intento = intento.value;
intento = intento.toUpperCase();
return intento;
}
function leerIntento() {
  let intento = document.getElementById("guess-input");
  intento = intento.value;
  intento = intento.toUpperCase();
  return intento;
}

function terminar(mensaje) {
  const input = document.getElementById("guess-input");
  input.disabled = true;
  BUTTON.disabled = true;
  let contenedor = document.getElementById("guesses");
  contenedor.innerHTML = mensaje;
  BUTTON.style.display = "block";
}

function asignarPalabra() {
  fetch("")
    .then((respuesta) => respuesta.json())
    .then((respuesta) => {
      palabra = respuesta[0]?.toUpperCase();
      console.log(palabra);
      if (palabra) {
        console.log(palabra);
      } else {
        console.error("No se pudo obtener la palabra");
      }
    })
    .catch(error => console.error(error));
}
function start() {
  asignarPalabra();
  const GRID = document.getElementById("grid");
  input.disabled = false;
  BUTTON.disabled = false;
  GRID.innerHTML = "";
  intentos = 6;
  let contenedor = document.getElementById("guesses");
  contenedor.innerHTML = "";
  BUTTON.style.display = "none";
} 
