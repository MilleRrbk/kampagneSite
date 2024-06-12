<template>
    <button class="ticket-button bg-mainRed text-mainSand">
        <slot></slot>
    </button>
   </template>

    

   <script>
   export default {
     name: 'TicketButton'
   };
   </script>
   
   <style scoped>

.ticket-button {
  border: none; 
  padding: 25px 62px; 
  text-align: center; 
  text-decoration: none; 
  display: inline-block; 
  font-size: 16px; 
  margin: 4px 2px; 
  cursor: pointer;
  border-radius: 40px; 
  transition: background-color 0.3s ease;
}

.ticket-button:hover {
  background-color: #690909; 
}
   </style>