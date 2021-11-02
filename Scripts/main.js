import {zombieDataArray} from "./ZombieData.js";
import { renderArray,switchPage } from "./display.js";
import { addZombieToArray,saveCoder } from "./logics.js";

let addZombieButton = document.getElementById("buttonText");
addZombieButton.addEventListener("click", addZombieToArray);

console.log(zombieDataArray);

let switchPageButton = document.getElementById("nextPage");
switchPageButton.addEventListener("click",switchPage);

let antidote = document.getElementById("antidote");
antidote.addEventListener("click",saveCoder);