<template>
  <div class="pt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:mx-main-x md:pt-20 lg:w-2/3 lg:mx-auto lg:h-screen lg:place-content-center lg:pt-0">
    <router-link :to="`/portfolio/${project.id}`" v-for="project in projects" :key="project.id">
      <img class="object-cover h-48 w-full lg:h-64" :src="project.img" alt="">
    </router-link>
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