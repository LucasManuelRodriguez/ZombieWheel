import {zombieDataArray} from "./ZombieData.js"
export function createCard(id,name)  {
    let boxZombieCards = document.getElementById(`${id}`)
    //boxZombieCards.className
    console.log(boxZombieCards.className)
    boxZombieCards.innerHTML+= `<li>
                                    <img class="imgCards" src="./assets/partida/zoombie/zombi.png" alt="zombie">
                                    <p class="nameZombie">${name}</p>
                                </li>`

}

export function switchPage (){
    let main1 = document.getElementById("main1");
    main1.classList.toggle("displayon");
    main1.classList.toggle("displayoff");

    let main2 = document.getElementById("main2");
    main2.classList.toggle("displayoff");
    main2.classList.toggle("displayon");
    renderArray(zombieDataArray,"zombieList");
}

export function renderArray(arrayToRender,id) {
    for (let i = 0; i < arrayToRender.length; i++) {
        createCard(id,arrayToRender[i]);
    } 
}