<template>
  <div class="h-screen pt-14 flex md:items-center">
    <div class="flex flex-col w-full md:flex-row md:flex-wrap md:mx-main-x lg:mx-auto lg:w-9/12 2xl:w-8/12">
      <router-link :to="`/portfolio/${project.id}`" v-for="project in projects" :key="project.id" class="md:w-1/3 relative">
        <img class="md:h-full md:w-full" :src="project.img" alt="">
        <img class="md:h-full md:w-full absolute top-0 left-0 opacity-0 transition-all duration-700 hover:opacity-100" :src="project.imgHover" alt="">
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

<style scoped>
@media (min-width: 1024px) {
  .main-width {
    width: 80%;
  }
}
</style>