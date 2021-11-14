<template>
    <footer>
        <div id="boxReset">
            <img id="reset" src="../assets/arrows-circle.png" alt="reset">
        </div>
    </footer>
</template>
<script>
export default {
    name:'Footer',
}
</script>
<style scoped>
footer{
    display: flex;
    justify-content: center;
    align-items: center;
}

#boxReset{
    width: 55px;
    height: 50px;
    display: flex;
    justify-content: center;
    cursor: pointer;
}

#reset{
    width: 100%;
    height: 100%;
    cursor: pointer;
}
</style>