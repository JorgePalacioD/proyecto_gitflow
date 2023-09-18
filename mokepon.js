let ataqueJugador = 0;
let ataqueEnemigo = 0;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego() {
  let sectionSeleccinarAtaque = document.getElementById("seleccionar-ataque");
  sectionSeleccinarAtaque.style.display = "none";

  let sectionReiniciar = document.getElementById("reiniciar");
  sectionReiniciar.style.display = "none";

  let botonMascotajugador = document.getElementById("btn-mascota");
  botonMascotajugador.addEventListener("click", seleccionaMascotaJugador);

  let botonFuego = document.getElementById("btn-fuego");
  botonFuego.addEventListener("click", ataqueFuego);
  let botonAgua = document.getElementById("btn-agua");
  botonAgua.addEventListener("click", ataqueAgua);
  let botonTierra = document.getElementById("btn-tierra");
  botonTierra.addEventListener("click", ataqueTierra);

  let botonReiniciar = document.getElementById("btn-reiniciar");
  botonReiniciar.addEventListener("click", reiniciarJuego);
}

function seleccionaMascotaJugador() {
  let sectionSeleccinarMascota = document.getElementById("seleccionar-mascota");
  sectionSeleccinarMascota.style.display = "none";

  let sectionSeleccinarAtaque = document.getElementById("seleccionar-ataque");
  sectionSeleccinarAtaque.style.display = "block";

  let inputHipogoge = document.getElementById("hipidoge");
  let inputCapipeto = document.getElementById("capipepo");
  let inputRatigueya = document.getElementById("ratigueya");
  let spanMascotaJugador = document.getElementById("mascota-jugador");
  if (inputHipogoge.checked) {
    spanMascotaJugador.innerHTML = "hipodoge";
  } else if (inputCapipeto.checked) {
    spanMascotaJugador.innerHTML = "capipepo";
  } else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = "ratigueya";
  } else {
    alert("Selecciona una mascota");
  }
  seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo() {
  let mascotaEnemigo = aleatorio(1, 3);
  let spanMascotaEnemigo = document.getElementById("mascota-enemigo");
  if (mascotaEnemigo == 1) {
    spanMascotaEnemigo.innerHTML = "Hipodoge";
  } else if (mascotaEnemigo == 2) {
    spanMascotaEnemigo.innerHTML = "Capipepo";
  } else if (mascotaEnemigo == 3) {
    spanMascotaEnemigo.innerHTML = "Ratigueya";
  }
}

function ataqueFuego() {
  ataqueJugador = "FUEGO";
  ataqueAleatorioEnemigo();
}
function ataqueAgua() {
  ataqueJugador = "AGUA";
  ataqueAleatorioEnemigo();
}
function ataqueTierra() {
  ataqueJugador = "TIERRA";
  ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(1, 3);
  if (ataqueAleatorio == 1) {
    ataqueEnemigo = "FUEGO";
  } else if (ataqueAleatorio == 2) {
    ataqueEnemigo = "AGUA";
  } else {
    ataqueEnemigo = "TIERRA";
  }

  combate();
}

function combate() {
  let spanVidasJugador = document.getElementById("vidas-jugador");
  let spanVidasEnemigo = document.getElementById("vidas-enemigo");

  if (ataqueEnemigo == ataqueJugador) {
    crearMensaje("EMPATE");
  } else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
    crearMensaje("GANASTE 🏆🥇🤩");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
    crearMensaje("GANASTE 🏆🥇🤩");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
    crearMensaje("GANASTE 🏆🥇🤩");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else {
    crearMensaje("PERDISTE 🥺👎😠");
    vidasJugador--;
    spanVidasJugador.innerHTML = vidasJugador;
  }
  revisarVidas();
}

function revisarVidas() {
  if (vidasEnemigo == 0) {
    crearMensajeFinal("FELICITACIONES GANASTE 🏆🥇🤩");
  } else if (vidasJugador == 0) {
    crearMensajeFinal("LO SIENTO PERDISTE 😠👎🥺");
  }
}

function crearMensaje(resultado) {
  let sectionMensajes = document.getElementById("mensajes");

  let parrafo = document.createElement("p");

  parrafo.innerHTML =
    "Tu mascota atacó con " +
    ataqueJugador +
    ", la mascota de tu enemigo atacó con " +
    ataqueEnemigo +
    "-" +
    resultado;
  sectionMensajes.appendChild(parrafo);
}

function crearMensajeFinal(resultadoFinal) {
  let sectionMensajes = document.getElementById("mensajes");

  let parrafo = document.createElement("p");
  parrafo.innerHTML = resultadoFinal;

  sectionMensajes.appendChild(parrafo);

  let botonFuego = document.getElementById("btn-fuego");
  botonFuego.disabled = true;
  let botonAgua = document.getElementById("btn-agua");
  botonAgua.disabled = true;
  let botonTierra = document.getElementById("btn-tierra");
  botonTierra.disabled = true;

  let sectionReiniciar = document.getElementById("reiniciar");
  sectionReiniciar.style.display = "block";
}

function reiniciarJuego() {
  location.reload();
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);
