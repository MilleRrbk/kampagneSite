<template>
    <div class="button-container">
      <a href="https://www.eventim-light.com/dk/a/6268ebc70e2f6b59c13b0fac/e/6656fcdfe820523242408b20" class="buttonTicket pragmatica-bold text-mainSand btn-shine" target="_blank" rel="noopener noreferrer">
      TICKETS
    </a>    </div>
   </template>

    

   <script>
   export default {
     name: 'TicketButton'
   };
   </script>
   
   <style scoped>

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
        background: linear-gradient(to right, #cfba9b 0, white 10%, #cfba9b 20%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: shine 3s infinite ease-out;
    }
    
    @keyframes shine {
  0% {
    background-position: 0;
  }
  60% {
    background-position: 180px;
  }
  100% {
    background-position: 180px;
  }
}

    .buttonTicket:hover,
    .buttonTicket:active {
    font-family: "gloss-drop", cursive;
    letter-spacing: .1rem;
}

.buttonTicket:active {
  opacity: .5;
}
   </style>