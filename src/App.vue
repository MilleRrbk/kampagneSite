<template>
  <div id="app">

  <header>
    
  </header>

  <main>
    <RouterView></RouterView>
  </main>

<Footer> </Footer>
</div>
</template>

  <script>
  import { RouterLink, RouterView } from 'vue-router'
  import Footer from './components/Footer.vue'
  import TitleText from './components/TitleText.vue'
  import HeroText from './components/HeroText.vue'
  import TicketButton from './components/NewRouteButton.vue'

  export default {
    components: {
      RouterView,
      RouterLink,
      Footer,
      TitleText,
      HeroText,
      TicketButton,
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

main {
  flex: 1;
}
</style>
