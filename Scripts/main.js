//import { addZombieArray } from "./AddZombieToArray.js";
//import { createCard } from "./CreateCard.js";
//import {zombieDataArray} from "./ZombieData.js";
zombieDataArray = [];
coderDataArray = [];


function addZombieArray() {
    let nameZombie = document.getElementById("AddZombieInput");
    zombieDataArray.push(nameZombie.value);
    console.log(zombieDataArray)
}


