<template>
  <div id="main-anim" class="flex flex-col md:justify-center md:items-center md:w-1/2 mx-auto pt-14 pb-14 h-screen overflow-x-hidden">
          
        <div id="freshProj" class="uppercase mix-blend-difference whitespace-nowrap text-white">
            fresh project<span class="mx-4" style="color: #00ffde">*</span>
            fresh project<span class="mx-4" style="color: #00ffde">*</span>
            fresh project<span class="mx-4" style="color: #00ffde">*</span>
            fresh project<span class="mx-4" style="color: #00ffde">*</span>
            fresh project<span class="mx-4" style="color: #00ffde">*</span>
            fresh project<span class="mx-4" style="color: #00ffde">*</span>
        </div>
        <div class="relative w-full mx-auto h-full md:h-1/2">
            <!-- <router-link v-for="project in projects" :key="project.id" :to="`/portfolio/${project.id}`">
                <img :id="project.id" class="labels absolute object-cover h-full  w-full" :src="project.img" alt="">
            </router-link> -->

            <a href="##">
                <img id="proj1" class="labels absolute object-cover h-full  w-full" src="../assets/blue.png" alt="">
            </a>
            <a href="##">
                <img id="proj2" class="labels absolute object-cover h-full  w-full" src="../assets/package.jpg" alt="">
            </a>
            <a href="###">
                <img id="proj3" class="labels absolute object-cover h-full  w-full" src="../assets/ball.jpg" alt="">
            </a>
        </div>
  </div>
</template>

<script setup>
import { onMounted } from '@vue/runtime-core'
import projectAnim from '../functions/projectAnim'
import getProjects from '../functions/getProjects'
import {ref} from 'vue'

const { projects, error, ids, load } = getProjects()
const { anim } = projectAnim()
onMounted(() => {
    load()
    anim()
    const tl = gsap.timeline({ repeat: -1 })
    tl.set("#freshProj", {xPercent: -8})
    tl.to("#freshProj", { xPercent: 8.7, duration: 3, ease: "none" })
})

</script>

<style>
@media only screen and (min-width: 768px) {
    #freshProj {
        font-size: 1vw;
    }
}
</style>