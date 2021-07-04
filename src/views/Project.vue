<template>
  <div class="">
    <iframe :src="project.url" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" width="100%" height="800px" frameborder="0" seamless></iframe>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { onMounted, ref } from "vue"
import getProject from '../functions/getProject'

const route = useRoute()
const id = route.params.id

// const { project, error, load } = getProject()
// onMounted(() => {
//   load(id)
// })

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

let project = projects.value.find(o => o.id === id);
console.log(project)
</script>

<style>

</style>