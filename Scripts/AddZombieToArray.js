import {zombieDataArray} from "./ZombieData.js";
import {createCard} from "./CreateCard.js";

let addZombieButton = document.getElementById("buttonText");

export function addZombieArray() {
    
   addZombieButton.addEventListener("click", function(){
    let nameZombie = document.getElementById("AddZombieInput");
    zombieDataArray.push(nameZombie.value);
    for (let i = 0; i < zombieDataArray.length; i++) {
        createCard(zombieDataArray[i]);
        console.log("funciono");
   }
   });

}



