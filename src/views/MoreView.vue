<template>
  <div class="more-container">
    <div class="more-overlay"></div> 
    <HomeButton></HomeButton>
    <TitleText2 style="padding-right: 10%;"></TitleText2>
    <HeroText2 style="padding-right: 10%;"></HeroText2>
    <InfoText></InfoText>
    <TicketButton2></TicketButton2>
  </div>
</template>

<script>
import TitleText2 from '@/components/morestuff/TitleText2.vue';
import HeroText2 from '@/components/morestuff/HeroText2.vue';
import TicketButton2 from '@/components/morestuff/TicketButton2.vue';
import InfoText from '@/components/morestuff/InfoText.vue';
import HomeButton from '@/components/morestuff/HomeButton.vue';

export default {
  name: 'MoreView',

  components: {
    TitleText2,
    HeroText2,
    TicketButton2,
    InfoText,
    HomeButton,
  },
};
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

.more-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 120%);
}
</style>
