import {zombieDataArray, coderDataArray} from "./ZombieData.js"
export function createCard(id,name)  {
    let boxZombieCards = document.getElementById(`${id}`)
    //boxZombieCards.className
    let imgClassCard;
    if(boxZombieCards.className == "zombieImg"){
        imgClassCard="./assets/partida/zoombie/zombi.png";
    }
    else{
        imgClassCard="./assets/partida/zoombie/lengua-fuera.png"
    }

    boxZombieCards.innerHTML+= `<li>
                                    <img class="imgCards" src="${imgClassCard}" alt="zombie">
                                    <p class="nameZombie">${name}</p>
                                </li>`
}

// Cuando ejecutamos la función switchPage mediante el método toogle para intercambiar las clases displayon/displayoff del HTML

export function switchPage (){
    let main1 = document.getElementById("main1");
    main1.classList.toggle("displayon");
    main1.classList.toggle("displayoff");

    let main2 = document.getElementById("main2");
    main2.classList.toggle("displayoff");
    main2.classList.toggle("displayon");
}

// Mediante el switchPage
export function nextPage() {
    switchPage();
    renderArray(zombieDataArray,"zombieList");
}

export function renderArray(arrayToRender,id) {
    for (let i = 0; i < arrayToRender.length; i++) {
        createCard(id,arrayToRender[i]);
    } 
}

export function resetAll(){
    switchPage()
    document.getElementById('zombieList').innerHTML="";
    document.getElementById('codersList').innerHTML="";
    zombieDataArray.splice(0,zombieDataArray.length);
    coderDataArray.splice(0,zombieDataArray.length);
}