<template>
  <div id="mobile-contact" :class="{ 'invisible opacity-0': isHidden }" class="flex transition-all duration-500 justify-end bg-opacity-40 bg-gray-800 h-screen fixed top-0 w-full">
      <div class="bg-white w-16 relative">
        <router-link class="mix-blend-difference absolute top-36 pb-16 w-32 transform -rotate-90" to="/portfolio">
            <img src="/src/assets/portfolio.png" alt="">
        </router-link>
        <router-link class="mix-blend-difference absolute bottom-36 pb-16 w-32 transform -rotate-90" to="/about">
            <img src="/src/assets/about.png" alt="">
        </router-link>
      </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps(['isHidden'])

</script>

<style>
</style>