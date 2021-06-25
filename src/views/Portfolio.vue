<template>
  <!-- <div class="pt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:mx-main-x md:pt-20 lg:w-2/3 lg:mx-auto lg:h-screen lg:place-content-center lg:pt-0">
    <router-link :to="`/portfolio/${project.id}`" class="relative h-48 lg:h-64" v-for="project in projects" :key="project.id">
      <img class="absolute object-cover h-48 w-full lg:h-64" :src="project.img" alt="">
      <img class="absolute hover:opacity-100 object-cover opacity-0 duration-700 transition-all h-48 w-full lg:h-64" :src="project.imgHover" alt="">
    </router-link>
  </div> -->
  <div class="h-screen pt-14 flex md:items-center">
    <div class="flex flex-col w-full md:flex-row md:flex-wrap md:mx-main-x lg:w-7/12 lg:mx-auto xl:w-1/2">
      <router-link :to="`/portfolio/${project.id}`" v-for="project in projects" :key="project.id" class="md:w-1/3 relative">
        <img class="h-full w-full" :src="project.img" alt="">
        <img class="absolute top-0 left-0 opacity-0 transition-all duration-700 hover:opacity-100 z-10" :src="project.imgHover" alt="">
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue"
import getProjects from '../functions/getProjects'

const { projects, error, load } = getProjects()
onMounted(() => {
  load()
})
</script>

<style>

</style>