<template>
  <div class="h-screen pt-0 flex md:items-center">
    <div class="flex flex-col overflow-scroll overlow-x-hidden w-full md:flex-row md:flex-wrap md:mx-main-x lg:mx-auto lg:w-9/12 2xl:w-8/12">
      <router-link :to="`/portfolio/${project.id}`" v-for="project in projects" :key="project.id" class="md:w-1/3 relative">
        <img class="md:h-full md:w-full" :src="project.img" alt="">
        <img class="md:h-full md:w-full absolute top-0 left-0 opacity-0 transition-all duration-700 hover:opacity-100" :src="project.imgHover" alt="">
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue"
// import getProjects from '../functions/getProjects'

const projects = ref([
  {
    img: '/port/POST2-main.jpg',
    imgHover: '/port/POST2-hover.jpg',
    id: 'post',
    url: 'https://readymag.com/twentytwos/2916833/',
  },
  {
    img: '/port/DZ main.jpg',
    imgHover: '/port/DZ hover.jpg',
    id: 'D&Z',
    url: 'https://readymag.com/twentytwos/DZcontemporary/',
  },
  {
    img: '/port/TT-main.jpg',
    imgHover: '/port/TT-hover.jpg',
    id: 'TT',
    url: 'https://readymag.com/twentytwos/tentevtonov/',
  },
  {
    img: '/port/Ducker main.jpg',
    imgHover: '/port/Ducker hover.jpg',
    id: 'storytel',
    url: 'https://readymag.com/twentytwos/2523322/',
  },
  {
    img: '/port/Masa-main.jpg',
    imgHover: '/port/Masa-hover.jpg',
    id: 'masa',
    url: 'https://readymag.com/twentytwos/masa/',
  },
  {
    img: '/port/Pipes-main.jpg',
    imgHover: '/port/Pipes-hover.jpg',
    id: 'pipes',
    url: 'https://readymag.com/twentytwos/2884655/',
  },
])

// const { projects, error, load } = getProjects()
onMounted(() => {
  // load()
  console.log(projects)
})
</script>

<style scoped>
@media (min-width: 1024px) {
  .main-width {
    width: 80%;
  }
}
</style>