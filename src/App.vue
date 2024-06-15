<template>
  <div id="app">
    <header>
      <!-- Your header content -->
    </header>

    <main>
      <RouterView></RouterView>
    </main>

    <Footer></Footer>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import Footer from './components/Footer.vue'; // Adjust path if needed

export default {
  name: 'App',
  components: {
    RouterView,
    Footer,
    // Add other components as needed
  },
};
</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%);
  overflow: hidden; /* Prevent gradient overlay from causing overflow */
}

main {
  flex: 1;
  position: relative; /* Ensure stacking context for z-index of content */
  z-index: 2; /* Ensure content is above the gradient overlay */
}

/* Other styles can be scoped or global based on needs */
</style>
