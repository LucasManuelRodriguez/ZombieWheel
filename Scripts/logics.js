import { renderArray } from "./display.js";
import {zombieDataArray,coderDataArray} from "./ZombieData.js";


export function addZombieToArray() {
    let nameZombie = document.getElementById("AddZombieInput");
    zombieDataArray.push(nameZombie.value);
    //console.log(zombieDataArray);
}

//funcion antidoto

export function saveCoder(){
    console.log(zombieDataArray);
    let randomZombie=Math.floor(Math.random()*zombieDataArray.length)
    coderDataArray.push(zombieDataArray[randomZombie]);
    console.log(coderDataArray);
    zombieDataArray.splice(randomZombie,1);
    renderArray(zombieDataArray,"zombieList");
    renderArray(coderDataArray,"codersList");
}
