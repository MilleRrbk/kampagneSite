<template>
    <div class="button-container">
      <RouterLink to="/home" class="buttonMore pragmatica-bold text-mainSand">
        <span v-html="buttonText"></span>
      </RouterLink>
    </div>
  </template>
  
  
  
      
  
  <script>
  export default {
    name: 'NewRouteButton',
    data() {
      return {
        buttonText: 'HOME'
      };
    },
    mounted() {
      this.applyWavyAnimation();
    },
    methods: {
      applyWavyAnimation() {
        // Split the text into individual characters and wrap each with <span>
        this.buttonText = this.buttonText
          .split('')
          .map(letter => `<span>${letter}</span>`)
          .join('');
  
        // Add wavy class to each <span> with a delay
        this.$nextTick(() => {
          const spans = document.querySelectorAll('.buttonMore span');
          spans.forEach((span, index) => {
            setTimeout(() => {
              span.classList.add('wavy');
            }, index * 100 + 200);
          });
        });
      }
    }
  }
  </script>
  
  
  
  <style scoped>
  .button-container {
    flex: none;
    text-align: left;
    margin-bottom: 18%;
    padding-top: 3%;
    padding-left: 10%;
    padding-bottom: 10%;
  }
  
  .buttonMore {
    cursor: pointer;
    display: inline-block;
    font-size: clamp(1.5rem, 2vw, 3rem); /* responsive font size */
    min-height: 40px;
    text-align: left;
    text-decoration: underline;
  }
  
  .buttonMore:hover,
  .buttonMore:active {
    font-family: "gloss-drop", cursive;
    letter-spacing: .1rem;
  }
  
  .buttonMore:active {
    opacity: .2;
  }
  
  .wavy {
    animation-name: wavy;
    animation-duration: 1s;
    animation-timing-function: ease-in;
    animation-iteration-count: infinite;
    position: relative;
    top: 0;
    left: 0;
  }
  
  @keyframes wavy {
    0% {
      top: 0px;
    }
    50% {
      top: -2px;
    }
    100% {
      top: 0px;
    }
  }
  </style>
  