<template>
  <div id="app">
    <header>
     
    </header>

    <main>
      <RouterView></RouterView>
    </main>

    <Footer></Footer>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import Footer from './components/Footer.vue'; 

export default {
  name: 'App',
  components: {
    RouterView,
    Footer,
  },
};
</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%);
  overflow: hidden; 
}

main {
  flex: 1;
  position: relative; 
  z-index: 2; 
}
</style>
