<template>
    <div class="button-container">
      <RouterLink to="/home" class="buttonHome pragmatica-bold text-mainSand">
        <span v-html="buttonText"></span>
      </RouterLink>
    </div>
  </template>  
  
  <script>
  export default {
    name: 'HomeButton',
    data() {
      return {
        buttonText: 'BACK'
      };
    },
    mounted() {
      this.applyWavyAnimation();
    },
    methods: {
      applyWavyAnimation() {
        // split the text into individual characters and wrap each with <span>
        this.buttonText = this.buttonText
          .split('')
          .map(letter => `<span>${letter}</span>`)
          .join('');
  
        // add wavy class to each <span> with a delay
        this.$nextTick(() => {
          const spans = document.querySelectorAll('.buttonHome span');
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
  text-align: right;
  margin-top: 3%;
  margin-right: 6%;
}

  .buttonHome {
  cursor: pointer;
  display: inline-block;
  font-size: clamp(1.5rem, 2vw, 3rem); 
  text-align: left;
  padding: 12px 48px;
  text-decoration: underline;

}
  
  .buttonHome:hover,
  .buttonHome:active {
    font-family: "gloss-drop", cursive;
    letter-spacing: .1rem;
  }
  
  .buttonHome:active {
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
  