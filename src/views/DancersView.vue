<template>
    <div class="home-container">
      <div class="home-overlay"></div> <!-- Gradient overlay -->
      <HomeButton></HomeButton>
      <p class="dancerTextStyling text-mainSand">Watch the dancers moves!</p>
      <ImageHover></ImageHover>
    </div>
  </template>
  
  <script>
  import { RouterLink } from 'vue-router';
  import HomeButton from '@/components/morestuff/HomeButton.vue';
  import ImageHover from '@/components/homestuff/ImageHover.vue';
  
  export default {
    name: 'DancerView',
  
    components: {
      HomeButton,
      ImageHover,
    }
  }
  
  </script>
  
  <style scoped>
  .home-container {
    position: relative; 
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: left;
    overflow: hidden;
  
    
    background-image: url('/src/assets/imgs/redSand.png'); 
    background-size: cover;
    background-position: top;
  }
  
  .home-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 140%);
  }
  
  .dancerTextStyling {
        font-family: "pragmatica", sans-serif;
        font-weight: 700;
        font-style: italic;
        font-size: clamp(2.5vw, 4vw, 3rem); 
        text-align: left;
        padding-left: 10%;
        padding-top: 3%;
        opacity: 0.9;
  }
  </style>
  