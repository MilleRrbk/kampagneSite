<!-- src/components/Footer.vue -->
<template>
    <footer class="footer bg-mainBlack text-mainSand">
        <a href="https://cullberg.com/en/performance/when-in-battle-im-free-never-free-to-rest/" target="_blank" rel="noopener noreferrer">
      <img src="@/assets/imgs/cullberglogo.png" alt="CullBerg logo" class="logo">
    </a>
    <a href="https://www.metropolis.dk/while-in-battle/" target="_blank" rel="noopener noreferrer">
      <img src="@/assets/imgs/metrologo.png" alt="Metropolis logo" class="logo">
    </a>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer'
  };
  </script>
  
  <style scoped>
  .footer {
    text-align: left;
    padding: 1%;
    position: static;
    bottom: 0;
    width: 100vw;
  }

  .logo {
    display: inline-block;
    vertical-align: middle;
    margin: 0 4%;
  }
  </style>
  