<template>
    <button class="rounded-button bg-mainSand text-mainRed">
        <slot></slot>
    </button>
   </template>

    

   <script>
   export default {
     name: 'RoundedButton'
   };
   </script>
   
   <style scoped>

.rounded-button {
  border: none; /* Remove borders */
  padding: 25px 62px; /* Some padding */
  text-align: center; /* Center the text */
  text-decoration: none; /* Remove underline */
  display: inline-block; /* Get the element to respect width/height */
  font-size: 16px; /* Increase font size */
  margin: 4px 2px; /* Some margin */
  cursor: pointer; /* Pointer/hand icon */
  border-radius: 40px; /* Rounded corners */
  transition: background-color 0.3s ease; /* Smooth transition */
}

.rounded-button:hover {
  background-color: #DDC8AF; /* Darker green on hover */
}
   </style>