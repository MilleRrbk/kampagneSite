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
        text-decoration: underline;
        font-size: 1.5rem;
        min-height: 40px;
        text-align: left;
        padding: 12px 48px;
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