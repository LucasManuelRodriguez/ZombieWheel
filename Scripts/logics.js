import { renderArray } from "./display.js";
import {zombieDataArray,coderDataArray} from "./ZombieData.js";

// Función para hacer un push del valor del input al array de zombie 

export function addZombieToArray() {
    let nameZombie = document.getElementById("AddZombieInput");
    zombieDataArray.push(nameZombie.value);
    nameZombie.value=null;
}

//funcion antidoto

export function saveCoder(){
    console.log(zombieDataArray);
    let randomZombie=Math.floor(Math.random()*zombieDataArray.length)
    coderDataArray.push(zombieDataArray[randomZombie]);
    console.log(coderDataArray);
    zombieDataArray.splice(randomZombie,1);
    document.getElementById("zombieList").innerHTML ="";
    renderArray(zombieDataArray,"zombieList");
    document.getElementById("codersList").innerHTML ="";
    renderArray(coderDataArray,"codersList");
}
