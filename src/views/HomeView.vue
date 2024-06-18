<template>
  <div class="home-container">
    <div class="home-overlay"></div> <!-- Gradient overlay -->
    <TicketButton></TicketButton>
    <TitleText style="padding-left: 10%; padding-top: 2%;"></TitleText>
    <p class="pragmatica-bold text-mainSand" style="padding-top: 1%; padding-left: 10%; font-size: 1.1rem; letter-spacing: 0.3px; opacity: 0.8;">By Hooman Sharifi</p>
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

export default {
  name: 'HomeView',

  components: {
    TitleText,
    TicketButton,
    HeroText,
    NewRouteButton,
  }
}

</script>

<style scoped>
.home-container {
  position: relative; /* Ensure stacking context for z-index */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  overflow: hidden; /* Prevent gradient overlay from causing overflow */

  /* Background image */
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
  flex: none; /* Prevents stretching */
  position: relative; /* Ensure stacking context for z-index */
  z-index: 2; /* Ensure content is above the overlay */
}
</style>
