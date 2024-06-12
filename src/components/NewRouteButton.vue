<template>
    <div class="button-container">
        <button class="buttonMore pragmatica-bold text-mainSand" role="button">READ MORE</button>
    </div>
   </template>

    

   <script>
   export default {
     name: 'NewRouteButton'
   };
   </script>
   
   <style scoped>

.button-container {
    flex: none;
    text-align: left;
    margin-top: 2%;
    margin-bottom: 18%;
    padding-top: 3%;
    padding-left: 10%;
    padding-bottom: 10%;
    
   }
    .buttonMore {
        cursor: pointer;
        display: inline-block;
        font-size: 1.5rem;
        min-height: 4%;
        text-align: left;  
        text-decoration: underline;
    }
    
    .buttonMore:hover,
    .buttonMore:active {
    font-family: "gloss-drop", cursive;
    letter-spacing: .1rem;
    

}

.buttonMore:active {
  opacity: .5;
}
   </style>