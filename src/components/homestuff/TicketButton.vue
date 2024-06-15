<template>
  <div class="button-container">
    <a href="https://www.eventim-light.com/dk/a/6268ebc70e2f6b59c13b0fac/e/6656fcdfe820523242408b20" class="buttonTicket pragmatica-bold text-mainSand btn-shine" target="_blank" rel="noopener noreferrer" id="buttonText">
      TICKETS
    </a>
  </div>
</template>

    

<script>
export default {
  name: 'TicketButton',
  mounted() {
    this.applyWavyAnimation();
  },
  methods: {
    applyWavyAnimation() {
      const button = document.getElementById('buttonText');
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
.button-container {
  flex: none;
  text-align: right;
  margin-top: 3%;
  margin-right: 6%;
}

.buttonTicket {
  cursor: pointer;
  display: inline-block;
  font-size: 1.5rem;
  min-height: 40px;
  text-align: left;
  padding: 12px 48px;
}

.buttonTicket:hover,
.buttonTicket:active {
color: #e1ceb1}

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
