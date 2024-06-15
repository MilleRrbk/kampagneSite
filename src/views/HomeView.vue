<template>
  <div class="home-container">
    <RoundedButton></RoundedButton>
    <TitleText style="padding-left: 10%; padding-top: 2%;"></TitleText>
    <p class="pragmatica-bold text-mainSand" style="padding-top: 1%; padding-left: 10%; font-size: 1.1rem;      letter-spacing: 0.3px; opacity: 0.8;">By Hooman Sharifi</p>
    <HeroText style="padding-left: 10%;"></HeroText>
    <NewRouteButton></NewRouteButton>
    
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import TitleText from '@/components/homestuff/TitleText.vue'
import RoundedButton from '@/components/homestuff/TicketButton.vue'
import HeroText from '@/components/homestuff/HeroText.vue'
import NewRouteButton from '@/components/homestuff/NewRouteButton.vue';

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
  background-image: url('/src/assets/imgs/sitebg-newhighlight.png'); 
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
