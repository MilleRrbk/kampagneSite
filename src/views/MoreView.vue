<template>
  <div class="more-container">
    <p>hej</p>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';


export default {
  name: 'MoreView',

  components: {
  }
}

</script>

<style scoped>
.more-container {
  background-image: url('/src/assets/imgs/moreBG.png'); 
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
