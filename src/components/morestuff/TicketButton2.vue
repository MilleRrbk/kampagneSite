<template>
    <div class="button-container2">
      <a href="https://www.eventim-light.com/dk/a/6268ebc70e2f6b59c13b0fac/e/6656fcdfe820523242408b20"
         class="buttonTicket2 pragmatica-bold text-mainSand"
         target="_blank" rel="noopener noreferrer"
         ref="buttonText">
        TICKETS
      </a>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TicketButton2',
    mounted() {
      this.applyWavyAnimation();
    },
    methods: {
      applyWavyAnimation() {
        const button = this.$refs.buttonText; // Access the element using ref
        const text = button.innerText;
  
        button.innerHTML = text
          .split('')
          .map(letter => `<span>${letter}</span>`)
          .join('');
  
        Array.from(button.children).forEach((span, index) => {
          setTimeout(() => {
            span.classList.add('wavy');
          }, index * 90 + 200);
        });
      }
    }
  }
  </script>
  
  <style>
  .button-container2 {
    flex: none;
    text-align: left;
    margin-top: 5%;
    margin-bottom: 5%;
    padding-left: 10%;
  }
  
  .buttonTicket2 {
    cursor: pointer;
    display: inline-block;
    font-size: clamp(1.5rem, 2vw, 3rem); /* responsive font size */
    min-height: 40px;
    text-align: left;
    text-decoration: underline;
  }
  
  .buttonTicket2:hover,
  .buttonTicket2:active {
    font-family: "gloss-drop", cursive;
    letter-spacing: .1rem;
  }
  
  .buttonTicket2:active {
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
  