<template>
  <div id="app">
    <Header/>
  </div>
</template>

<script>

import  Header  from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
@import url(./style/reset.css);

body{
  max-width: max-content;
}

#app{
  height: 100vh;
  background-color: black;
  width: 100%;
}

header {
  width: 100%;
  height: 20%;
}

main {
  width: 100%;
  height: 70%;
  background-color: #93C28E;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}

footer {
  height: 10%;
  width: 100%;
  
}

</style>
