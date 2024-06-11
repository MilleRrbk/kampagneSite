<template>
  <div id="app">
  <header>
    
  </header>

  <main>
    
  </main>

<Footer> </Footer>
</div>
</template>

  <script>
  import { RouterLink, RouterView } from 'vue-router'
  import Footer from './components/Footer.vue'
  
  export default {
    components: {
      RouterView,
      RouterLink,
      Footer
    },
  };
  </script>

<style scoped>
/* Global styles can go here */
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

header {
  background-color: #5b3a3a;
  padding: 10px;
  text-align: center;
}

main {
  flex: 1;
  padding: 20px;
}
</style>
