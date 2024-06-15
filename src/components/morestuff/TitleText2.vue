<template>
    <p class="TitleText2Styling text-mainSand">Language of the body</p>   
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
        font-size: clamp(1.5rem, 2.5vw, 3rem); /* responsive font size */
         text-align: right;
         margin-top: 10%;
         line-height: 1.3;
        }
       </style>