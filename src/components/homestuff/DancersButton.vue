<template>
    <div class="buttons-container">
      <div class="button-container">
        <router-link to="/dancers" class="buttonTicket pragmatica-bold text-mainSand" id="buttonText1">
        DANCERS
      </router-link>
      </div>
      <div class="button-container">
        <a href="https://www.eventim-light.com/dk/a/6268ebc70e2f6b59c13b0fac/e/6656fcdfe820523242408b20" class="buttonTicket pragmatica-bold text-mainSand" target="_blank" rel="noopener noreferrer" id="buttonText2">
          TICKETS
        </a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ButtonsComponent',
    mounted() {
      this.applyWavyAnimation('buttonText1');
      this.applyWavyAnimation('buttonText2');
    },
    methods: {
      applyWavyAnimation(buttonId) {
        const button = document.getElementById(buttonId);
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
  .buttons-container {
    display: flex;
    justify-content: right;
    margin-top: 1%;
  }
  
  .button-container {
    flex: none;
    text-align: right;
  }
  
  .buttonTicket {
    cursor: pointer;
    display: inline-block;
    font-size: clamp(1.5rem, 2vw, 3rem); /* responsive font size */
    min-height: 40px;
    text-align: left;
    padding: 0px 48px;
    text-decoration: underline;
  }
  
  .buttonTicket:hover,
  .buttonTicket:active {
    font-family: "gloss-drop", cursive;
    letter-spacing: .1rem;
  }
  
  .buttonTicket:active {
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
  