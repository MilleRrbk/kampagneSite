<template>
    <div class="button-container">
      <a href="https://www.eventim-light.com/dk/a/6268ebc70e2f6b59c13b0fac/e/6656fcdfe820523242408b20" class="buttonTicket pragmatica-bold text-mainSand" target="_blank" rel="noopener noreferrer">
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
        /*background: #cfba9b00;
        border: 0px solid #e7d6bc;
        border-radius: 3px;
        box-shadow: rgba(0, 0, 0, 0) 1px 2px 4px;
        box-sizing: border-box;*/
        cursor: pointer;
        display: inline-block;
        font-size: 1.5rem;
        min-height: 40px;
        text-align: left;
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