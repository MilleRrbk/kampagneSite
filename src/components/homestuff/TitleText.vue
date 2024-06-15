<template>
    <p class="titleStyling text-mainSand">
      <span v-for="(line, lineIndex) in lines" :key="lineIndex">
        <span v-for="(char, charIndex) in line" :key="charIndex" :class="{ 'letter': char !== ' ' }">
          {{ char }}
        </span>
        <br v-if="lineIndex < lines.length - 1">
      </span>
    </p>
  </template>
  
  <script>
  export default {
    name: 'TitleText',
    computed: {
      lines() {
        // Split the string into lines and then into characters, preserving spaces
        return [
          "WHILE",
          "IN BATTLE",
          "I'M FREE,",
          "NEVER FREE",
          "TO REST"
        ].map(line => line.split(''));
      }
    }
  };
  </script>
  
  <style scoped>
  .titleStyling {
    font-family: "gloss-drop", cursive;
    font-size: clamp(4.5rem, 6vw, 6rem); /* responsive font size */
    text-align: left;
    line-height: 1.4;
    z-index: 10;

  }
  
  .letter {
    display: inline-block;
    transition: transform 0.2s ease;
  }
  
  .letter:hover {
    transform: scale(1.3);
  }
  </style>
  