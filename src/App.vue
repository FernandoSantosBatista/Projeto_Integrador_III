<template>
  <div id="app">
    <NavBar/>
    <!--Ferramenta VLibras Widget-->
    <div vw class="enabled">
      <div vw-access-button class="active"></div>
        <div vw-plugin-wrapper>
          <div class="vw-plugin-top-wrapper">
        </div>
      </div>
    </div>
    <!--Fim Ferramenta VLibras Widget-->
     <router-view/>
     <FooterBar/>
  </div>
</template>
<script>

import NavBar from './components/NavBar.vue';
import FooterBar from './components/FooterBar.vue';


export default {
  components:{
    NavBar,
    FooterBar
}
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;500&display=swap');


  body {
    margin: 0;
    padding: 0;
    font-family: 'Josefin Sans', sans-serif;
  }
  
</style>