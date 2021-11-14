<template>
  <div id="app">
    <Header/>
    <Main/>
    <Footer/>
  </div>
</template>
<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
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
