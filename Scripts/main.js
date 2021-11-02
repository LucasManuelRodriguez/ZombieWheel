import {zombieDataArray} from "./ZombieData.js";
import { renderArray,switchPage, nextPage,resetAll } from "./display.js";
import { addZombieToArray,saveCoder } from "./logics.js";

// Create: Ejecuta al hacer click la función addZombieArray

let addZombieButton = document.getElementById("buttonText");
addZombieButton.addEventListener("click", addZombieToArray);

// Darle funcionalidad al botón que nos llevará a la siguiente página; NextPage

let switchPageButton = document.getElementById("nextPage");
switchPageButton.addEventListener("click",nextPage);

let antidote = document.getElementById("antidote");
antidote.addEventListener("click",saveCoder);

let resetButton = document.getElementById('reset');

resetButton.addEventListener('click', resetAll)