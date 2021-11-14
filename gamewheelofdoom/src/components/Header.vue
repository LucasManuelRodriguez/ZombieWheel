<template>
    <header>
        <h1 class="BloodTitle">Wheel <span class="ofDoom">of DXXM</span></h1>
        <img alt="Vue logo" src="../assets/blood.png" class="BloodHeader">
    </header>
</template>

<script>
export default {
    name:'Header',
}
</script>

<style scoped>
header {
    overflow: hidden;
    position: relative;
}

.BloodHeader {
    width: 100%;
    height: 65vh;
    object-fit: cover;
}

.BloodTitle {
    font-family: "Rock Salt";
    font-size: 35px;
    position: absolute;
    left: 15%;
    top: 2%;
}

span.ofDoom {
    color: #E27E69;
}
</style>