<template>
  <div id="main-anim" class="flex flex-col md:justify-center md:items-center md:w-1/2 mx-auto pt-14 pb-14 h-screen overflow-x-hidden">
          
        <div id="freshProj" class="uppercase z-10 mix-blend-difference whitespace-nowrap text-white">
            fresh project<span class="mx-4" style="color: #00ffde">*</span>
            fresh project<span class="mx-4" style="color: #00ffde">*</span>
            fresh project<span class="mx-4" style="color: #00ffde">*</span>
            fresh project<span class="mx-4" style="color: #00ffde">*</span>
            fresh project<span class="mx-4" style="color: #00ffde">*</span>
            fresh project<span class="mx-4" style="color: #00ffde">*</span>
        </div>
        <div class="relative w-full mx-auto h-full md:h-1/2">
            <router-link to="/portfolio/D&Z">
                <img class="proj1 labels z-10 absolute object-cover h-full w-full " src="/img/dz.jpg" alt="">
                <!-- <img class="proj1 z-10 absolute object-cover opacity-100 hover:opacity-100 transition-all duration-700 h-full w-full" src="/img/dz_hover.jpg" alt=""> -->
                <!-- <div class="tut w-full h-full z-10 opacity-0 hover:opacity-100 absolute"></div> -->
            </router-link>
            <router-link to="/portfolio/frederico">
                <img class="proj2 labels z-10 absolute object-cover h-full  w-full" src="/img/post.jpg" alt="">
                <!-- <img class="proj2 z-10 absolute object-cover h-full opacity-0 hover:opacity-100 transition-all duration-700  w-full" src="/img/post_hover.jpg" alt=""> -->
            </router-link>
            <router-link to="/portfolio/shadows">
                <img class="proj3 labels z-10 absolute object-cover h-full  w-full" src="/img/tt.jpg" alt="">
                <!-- <img class="proj3 z-10 absolute object-cover h-full opacity-0 hover:opacity-100 transition-all duration-700  w-full" src="/img/tt_hover.jpg" alt=""> -->
            </router-link>
        </div>
  </div>
</template>

<script setup>
import { onMounted } from '@vue/runtime-core'
import projectAnim from '../functions/projectAnim'
import {ref} from 'vue'

const { anim } = projectAnim()
onMounted(() => {
    anim()
    const tl = gsap.timeline({ repeat: -1 })
    tl.set("#freshProj", {xPercent: -8, mixBlendMode: "difference"})
    tl.to("#freshProj", { xPercent: 8.7, duration: 3, ease: "none" })
})

</script>

<style>
@media only screen and (min-width: 768px) {
    #freshProj {
        font-size: 1vw;
    }
    .tut {
        background-image: url("/img/dz_hover.jpg");
        background-size: 100%;
    }
}
</style>