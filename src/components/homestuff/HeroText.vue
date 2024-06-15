<template>
<p class="heroTextStyling text-mainSand">Get ready for an <br> extraordinary performance <br>
that explores cultural unity<br> and personal freedom</p>   
</template>
   
   <script>
   export default {
     name: 'HeroText'
   };
   </script>
   
   <style scoped>
    .heroTextStyling {
    font-family: "pragmatica", sans-serif;
    font-weight: 700;
    font-style: italic;
    font-size: clamp(1.5rem, 2.5vw, 3rem); /* responsive font size */
     text-align: left;
     margin-top: 17%;
     line-height: 1.3;
    }
   </style>