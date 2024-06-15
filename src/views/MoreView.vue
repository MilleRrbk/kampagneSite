<template>
  <div class="more-container">
    <TitleText2 style="padding-left: 10%; "></TitleText2>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import TitleText2 from '@/components/morestuff/TitleText2.vue'

export default {
  name: 'MoreView',

  components: {
    TitleText2,
  }
}

</script>

<style scoped>
.more-container {
  background-image: url('/src/assets/imgs/morebg-dancer2.png'); 
  background-size: cover;
  background-position: top;
  min-height: 94vh;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: right;
  position: relative;
}

</style>
