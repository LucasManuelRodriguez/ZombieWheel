import { renderArray } from "./display.js";
import {zombieDataArray,coderDataArray} from "./ZombieData.js";

// Función para hacer un push del valor del input al array de zombie 

export function addZombieToArray() {
    let nameZombie = document.getElementById("AddZombieInput");
    zombieDataArray.push(nameZombie.value);
    nameZombie.value=null;
}

//funcion antidoto. 

export function saveCoder(){
    //elige random un index del array indicado.
    let randomZombie=Math.floor(Math.random()*zombieDataArray.length)
    //el index del array zombie elegido se pushea al array coders.
    coderDataArray.push(zombieDataArray[randomZombie]);
    //con el metodo splice, eliminamos el elemento elegido del array zombie.
    zombieDataArray.splice(randomZombie,1);
    //nos posicionamos en html zombieList y lo borramos.
    document.getElementById("zombieList").innerHTML ="";
    //volvemos a imprimir(crear las cards del array modificado)sin el elemento elegido antes.
    renderArray(zombieDataArray,"zombieList");
    //hacemos lo mismo de arriba.
    document.getElementById("codersList").innerHTML ="";
    renderArray(coderDataArray,"codersList");
}
