<template>
    <main>
        <section class="main1 displayon" id="main1">
            <section id="Textboxbutton">     
                <input type="text" id="AddZombieInput" placeholder="Choose the Infected">
                <button type="button" id="buttonText">+</button>
            </section>      
             <div id="startbtn">
                <img id="nextPage" class="imgstart" src="../assets/radiacion.png" alt="Empezar partida">
             </div>
        </section>
    </main>
</template>
<script>
export default {
    name:'Main',
}
</script>
<style scoped>
.main1 {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    color: white;
}

#Textboxbutton{
    width: 90%;
    height: auto;
    display: flex;
    justify-content: center;
    color: white;
}

#AddZombieInput{
    width: 320px;
    display: flex;
    align-content: center;
    border: none;
    border-bottom: 5px solid white;
    background-color: white;
    text-align: center;
    outline-color: transparent; 
    outline-style: none;
    font-family: 'Cinzel', serif;
    font-size: 17px;
}

#buttonText {
    width: 40px;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: 'Cinzel', serif;
    font-size: 50px;
    border-radius: 20px;
    background-color: black;
    color: white;
    cursor: pointer;
}

#startbtn{
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    cursor: pointer;
}

.main2{
    width:inherit;
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
}

.imgstart{
    width: 60px;
    height: 60px;
    cursor: pointer;
}


.list{
    width: 100%;
    height: 25%;
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
}
.zombieImg{
    display: inherit;
    flex-direction: inherit;
    
}
.coderImg{
    display: inherit;
    flex-direction: inherit;
   
}
.cardBox{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 80px;
    height: inherit;
    border-radius: 6px;
    margin-left: 5px;
}
.coderImg .cardBox{
    background-color: #ECDBBA;
}
.zombieImg .cardBox{
    background-color: #CD4345;
}

.imgCards{
    width: 50px;
    height: 50px;
}
.nameZombie{
    font-family: 'Courier New', Courier, monospace;

}
.antidote{
    width: 100px;
    height: 100px;
}

.displayon {
    display: inherit;
}

.displayoff{
    display: none;
}

</style>