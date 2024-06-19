<template>
    <p class="infoTextStyling text-mainSand"> <span class="text-bold">Blågårds Plads</span> &nbsp;&nbsp;København <br>25.-29. juni &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kl. 19.30
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
        font-size: clamp(1vw, 1.5vw, 1.5vw); 
         text-align: left;
         padding-top: 1%;
         padding-left: 10%; 
         line-height: 1.3;
         z-index: 10;
        }

        .text-bold{
            font-weight: 700;
        }
       </style>