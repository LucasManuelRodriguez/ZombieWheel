export function createCard(name)  {
    let boxZombieCards = document.getElementById("zombieList")
    boxZombieCards.innerHTML+= `<li>
                                    <img class="imgCards" src="./assets/partida/zoombie/zombi.png" alt="zombie">
                                    <p class="nameZombie">${name}</p>
                                </li>`

}


 