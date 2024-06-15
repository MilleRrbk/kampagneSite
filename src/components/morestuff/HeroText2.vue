<template>
    <p class="heroText2Styling text-mainSand">Get ready for an <br> extraordinary performance <br>
    that explores cultural unity<br> and personal freedom</p>   
    </template>
       
       <script>
       export default {
         name: 'HeroText2'
       };
       </script>
       
       <style scoped>
        .heroText2Styling {
        font-family: "pragmatica", sans-serif;
        font-weight: 700;
        font-style: italic;
        font-size: clamp(1.5rem, 2.3vw, 3.5rem); /* responsive font size */
         text-align: right;
         padding-top: 5vh;
         line-height: 1.3;
         z-index: 10;

        }
       </style>