//import { addZombieArray } from "./AddZombieToArray.js";
//import { createCard } from "./CreateCard.js";
//import {zombieDataArray} from "./ZombieData.js";
let zombieDataArray = [];
let coderDataArray = [];


function addZombieArray() {
    let nameZombie = document.getElementById("AddZombieInput");
    zombieDataArray.push(nameZombie.value);
    console.log(zombieDataArray)
}

addZombieArray()
