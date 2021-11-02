import {zombieDataArray} from "./ZombieData.js";
import { renderArray,switchPage, nextPage,resetAll } from "./display.js";
import { addZombieToArray,saveCoder } from "./logics.js";

// Create: Ejecuta al hacer click la función addZombieArray

let addZombieButton = document.getElementById("buttonText");
addZombieButton.addEventListener("click", addZombieToArray);

// Darle funcionalidad al botón que nos llevará a la siguiente página; NextPage

let switchPageButton = document.getElementById("nextPage");
switchPageButton.addEventListener("click",nextPage);

//vamos a seleccionar aleatoriamente un zombie. (lo elimina del array y lo pasa a coder)

let antidote = document.getElementById("antidote");
antidote.addEventListener("click",saveCoder);

//borrar todo y volver al main1

let resetButton = document.getElementById('reset');

resetButton.addEventListener('click', resetAll)