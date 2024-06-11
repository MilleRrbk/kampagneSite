<template>
    <div :class="backgroundClass" class="background-image">
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BackgroundImage',
    props: {
      backgroundClass: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .background-image {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    z-index: -1; /* Ensure it stays behind other content */
  }
  </style>
  