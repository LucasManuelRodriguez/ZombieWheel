import {zombieDataArray, coderDataArray} from "./ZombieData.js"
//crea una carta. con el if, le decimos que si la class.name es igual a la indicada, va a tener una imagen(zombie)
//de lo contrario va a tener otra(coder)
export function createCard(id,name)  {
    let boxZombieCards = document.getElementById(`${id}`)
    let imgClassCard;
    if(boxZombieCards.className == "zombieImg"){
        imgClassCard="./assets/partida/zoombie/zombi.png";
    }
    else{
        imgClassCard="./assets/partida/zoombie/lengua-fuera.png"
    }

    boxZombieCards.innerHTML+= `<li class="cardBox">
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

// botón main1, ejecuta el switchPage y renderArray, para que sean visibles las cards(array) zombies
//con render array le decimos que array y donde imprimir la card. 
export function nextPage() {
    switchPage();
    renderArray(zombieDataArray,"zombieList");
}
//ejecuta la función createCard, por cada elemento del array dado como parámetro, para que lo imprima
//en el elemento(id "zombieList" o "coderList") seleccionado por el id dado como dato.
export function renderArray(arrayToRender,id) {
    for (let i = 0; i < arrayToRender.length; i++) {
        createCard(id,arrayToRender[i]);
    } 
}

//ejecuta la función switchPage, se posiciona en las dos listas en html y las vacía.
//con metodo .splice borramos desde index 0 al largo total de la lista.(preguntar Sergi)
export function resetAll(){
    switchPage()
    document.getElementById('zombieList').innerHTML="";
    document.getElementById('codersList').innerHTML="";
    zombieDataArray.splice(0,zombieDataArray.length);
    coderDataArray.splice(0,coderDataArray.length);
}