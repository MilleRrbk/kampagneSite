<template>
<p class="heroTextStyling text-mainSand"> {{ text }}</p>   
</template>
   
   <script>
   export default {
    props: ['text'],
   };
   </script>
   
   <style scoped>
   .heroTextStyling {
    font-family: "pragmatica", sans-serif;
    font-weight: 700;
    font-style: italic;
     font-size: 3rem;
     text-align: left;
     padding-left: 100px;
     margin-top: 30%;
     margin-bottom: 30%;
   }
   </style>