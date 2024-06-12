<template>
  <div class="home-container">
    <TitleText style="padding-left: 10%; padding-top: 6%;"></TitleText>
    <p class="pragmatica-bold text-mainSand" style="padding-left: 10%;">By Hooman Sharifi</p>
    <HeroText style="padding-left: 10%;"></HeroText>
    
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import TitleText from '@/components/TitleText.vue'
import RoundedButton from '@/components/RoundedButton.vue'
import HeroText from '@/components/HeroText.vue'
import TicketButton from '@/components/TicketButton.vue'

export default {
  name: 'HomeView',

  components: {
    TitleText,
    RoundedButton,
    HeroText,
    TicketButton,
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
</style>
