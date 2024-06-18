<template>
    <p class="infoTextStyling text-mainSand">Blågårds Plads &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;København <br>25.-29. juni &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kl. 19.30
    </p>   
    
    </template>
       
       <script>
       export default {
         name: 'InfoText'
       };
       </script>
       
       <style scoped>
        .infoTextStyling {
        font-family: "pragmatica", sans-serif;
        font-weight: 400;
        font-size: clamp(0.5rem, 2vw, 3.5rem); 
         text-align: right;
         padding-top: 5vh;
         line-height: 1.3;
         z-index: 10;
         padding-right: 10%; 
        }
       </style>