<template>
    <div class="image-container">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="image-wrapper"
        @mouseover="startHover(index)"
        @mouseleave="stopHover(index)"
      >
        <img :src="currentImage[index]" alt="Image" class="small-image" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ImageHover',
    data() {
      return {
        images: [],
        currentImage: [],
        hoverIntervals: []
      };
    },
    created() {
      // initialize images array with image urls
      this.images = Array.from({ length: 21 }, (_, i) => `/src/assets/imgs/dancers/d${i + 1}.png`);
    
      this.currentImage = Array.from({ length: 21 }, (_, i) => this.images[i]);
      // initialize hoverIntervals with null values
      this.hoverIntervals = Array(21).fill(null);
    },
    methods: {
      startHover(index) {
        let counter = 0;
        this.hoverIntervals[index] = setInterval(() => {
          counter = (counter + 1) % this.images.length;
          // update currentImage directly
          this.currentImage.splice(index, 1, this.images[counter]);
        }, 300);
      },
      stopHover(index) {
        clearInterval(this.hoverIntervals[index]);
        // Reset to the initial image
        this.currentImage.splice(index, 1, this.images[index]);
      }
    }
  };
  </script>
  
  <style scoped>
  .image-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 5%;
    padding-bottom: 5%;
    padding-left: 10%;
    padding-right: 5%;
  }
  
  .image-wrapper {
    margin-right: 6%;
    margin-bottom: 3%;
  }
  
  .small-image {
    width: 95px; 
    height: auto; 
    mix-blend-mode: multiply;
  }
  </style>
  