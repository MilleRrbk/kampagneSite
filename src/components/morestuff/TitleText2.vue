<template>
    <p class="TitleText2Styling text-mainSand">The Power of Dance</p>   
    </template>
       
       <script>
       export default {
         name: 'TitleText2'
       };
       </script>
       
       <style scoped>
        .TitleText2Styling {
        font-family: "pragmatica", sans-serif;
        font-weight: 700;
        font-style: italic;
        font-size: clamp(1.5vw, 3.5vw, 4vw); /* responsive font size */
         text-align: left;
         margin-top: 0%;
         margin-bottom: 2%;
         padding-left: 10%;
         line-height: 1.3;
         z-index: 10;
        }
       </style>