<template>
    <div class="button-container">
        <button class="button-24 pragmatica-bold text-mainSand" role="button">TICKETS</button>
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
    margin-right: 4%;
    padding-left: 10%;
    padding-bottom: 10%;
   }
    .button-24 {
        /*background: #cfba9b00;
        border: 0px solid #e7d6bc;
        border-radius: 3px;
        box-shadow: rgba(0, 0, 0, 0) 1px 2px 4px;
        box-sizing: border-box;*/
        cursor: pointer;
        display: inline-block;
        font-size: 1.5rem;
        font-weight: 800;
        line-height: 16px;
        min-height: 40px;
        padding: 16px 25px;
        text-align: center;
        text-rendering: geometricprecision;
        touch-action: manipulation;
        vertical-align: middle;   
    }
    
    .button-24:hover,
    .button-24:active {
    font-family: "gloss-drop", cursive;

}

.button-24:active {
  opacity: .5;
}
   </style>