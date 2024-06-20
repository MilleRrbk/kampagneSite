<template>
  <div class="home-container">
    <div class="home-overlay"></div> <!-- Gradient overlay -->
  
    <DancersButton></DancersButton>
    <TitleText style="padding-left: 10%; padding-top: 2%;"></TitleText>
    <p class="pragmatica-bold text-mainSand" style="padding-top: 1%; padding-left: 10%; font-size: 1.1rem; letter-spacing: 0.3px; opacity: 0.9;">By Hooman Sharifi</p>
    <HeroText style="padding-left: 10%;"></HeroText>
    <NewRouteButton></NewRouteButton>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import TitleText from '@/components/homestuff/TitleText.vue'
import TicketButton from '@/components/homestuff/TicketButton.vue'
import HeroText from '@/components/homestuff/HeroText.vue'
import NewRouteButton from '@/components/homestuff/NewRouteButton.vue';
import HomeButton from '@/components/morestuff/HomeButton.vue';
import ImageHover from '@/components/homestuff/ImageHover.vue';
import DancersButton from '@/components/homestuff/DancersButton.vue';

export default {
  name: 'HomeView',

  components: {
    TitleText,
    TicketButton,
    HeroText,
    NewRouteButton,
    HomeButton,
    ImageHover,
    DancersButton,
  }
}

</script>

<style scoped>
.home-container {
  position: relative; /* ensure stacking context for z-index */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  overflow: hidden; /* prevent gradient overlay from causing overflow */

  /* background image */
  background-image: url('/src/assets/imgs/sitebg-newhighlight.png'); 
  background-size: cover;
  background-position: top;
}

.home-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 110%);
}

.button-container {
  flex: none; /* prevents stretching */
  position: relative; /* ensure stacking context for z-index */
  z-index: 2; /* ensure content is above the overlay */
}

.dancerTextStyling {
      font-family: "pragmatica", sans-serif;
      font-weight: 700;
      font-style: italic;
      font-size: clamp(2.5vw, 2vw, 3rem); 
      text-align: left;
      padding-left: 10%;
      padding-top: 9%;
      opacity: 0.9;
}
</style>
