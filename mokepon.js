let ataqueJugador = 0;
let ataqueEnemigo = 0;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego() {
  let sectionSeleccinarAtaque = document.getElementById("seleccionar-ataque");
  sectionSeleccinarAtaque.style.display="none";

  let sectionReiniciar = document.getElementById("reiniciar");
  sectionReiniciar.style.display="none";

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
  sectionSeleccinarMascota.style.display="none";
  
  let sectionSeleccinarAtaque = document.getElementById("seleccionar-ataque");
  sectionSeleccinarAtaque.style.display="block";

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