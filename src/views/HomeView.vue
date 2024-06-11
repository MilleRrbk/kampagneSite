<template>
  <div class="home-container">
    <!-- Your home view content goes here -->
    <TitleText style="margin: 100px;"></TitleText>
    <RoundedButton>Click Me</RoundedButton>
    <HeroText></HeroText>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import TitleText from '@/components/TitleText.vue'
import RoundedButton from '@/components/RoundedButton.vue'
import HeroText from '@/components/HeroText.vue'

export default {
  name: 'HomeView',

  components: {
    TitleText,
    RoundedButton,
    HeroText
  }
}

</script>

<style scoped>
.home-container {
  background-image: url('/src/assets/imgs/whiteSandBg.png'); /* Adjust the path to your image */
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white; /* Adjust text color to contrast with background */
}
</style>
