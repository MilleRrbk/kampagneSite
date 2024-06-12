<template>
  <div class="home-container">
    <RoundedButton></RoundedButton>
    <TitleText style="padding-left: 10%; padding-top: 2%;"></TitleText>
    <p class="pragmatica-bold text-mainSand" style="padding-left: 10%; font-size: 1.2rem;">By Hooman Sharifi</p>
    <HeroText style="padding-left: 10%;"></HeroText>
    <NewRouteButton></NewRouteButton>
    
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import TitleText from '@/components/TitleText.vue'
import RoundedButton from '@/components/TicketButton.vue'
import HeroText from '@/components/HeroText.vue'
import NewRouteButton from '@/components/NewRouteButton.vue';

export default {
  name: 'HomeView',

  components: {
    TitleText,
    RoundedButton,
    HeroText,
    NewRouteButton,
  }
}

</script>

<style scoped>
.home-container {
  background-image: url('/src/assets/imgs/sitebgHD.png'); 
  background-size: cover;
  background-position: top;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  position: relative;
}

.button-container {
  flex: none; /* Prevents stretching */
}
</style>
