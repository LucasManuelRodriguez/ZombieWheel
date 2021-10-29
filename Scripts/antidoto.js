export let zombieNameArray=["Carmen","Lucas","Meli","Claudia","Facu","Rita"]

export function saveCoder(){
    let randomZombie=Math.floor(Math.random()*zombieNameArray.length)
    console.log(randomZombie)
    console.log(zombieNameArray[randomZombie])

    let randomCoder=zombieNameArray.splice(randomZombie,1)

    console.log(randomCoder)
    console.log(zombieNameArray)
}


