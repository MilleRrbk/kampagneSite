<template>
<p class="heroTextStyling text-mainSand">Get ready for an <br> extraordinary performance <br>
that explores personal freedom<br> and cultural unity</p>   
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
      font-size: clamp(2.5vw, 4vw, 3rem); 
      text-align: left;
      margin-top: 17%;
      line-height: 1.3;
      z-index: 10;
    }
   </style>