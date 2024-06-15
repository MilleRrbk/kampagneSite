<!-- src/components/Footer.vue -->
<template>
    <footer class="footer bg-mainBlack text-mainSand">
      <img src="@/assets/imgs/cullberglogo.png" alt="CullBerg logo" class="logo">
      <img src="@/assets/imgs/metrologo.png" alt="Metropolis logo" class="logo">
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
    padding: 20px;
    position: static;
    bottom: 0;
    width: 100%;
  }

  .logo {
    display: inline-block;
    vertical-align: middle;
    margin: 0 3%;
  }
  </style>
  