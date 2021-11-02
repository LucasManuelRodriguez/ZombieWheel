import {zombieDataArray} from "./ZombieData.js";
import { renderArray,switchPage, nextPage,resetAll } from "./display.js";
import { addZombieToArray,saveCoder } from "./logics.js";

let addZombieButton = document.getElementById("buttonText");
addZombieButton.addEventListener("click", addZombieToArray);

console.log(zombieDataArray);

let switchPageButton = document.getElementById("nextPage");
switchPageButton.addEventListener("click",nextPage);

let antidote = document.getElementById("antidote");
antidote.addEventListener("click",saveCoder);

let resetButton = document.getElementById('reset');

resetButton.addEventListener('click', resetAll)