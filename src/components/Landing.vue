<template>
  <div id="main-anim" class="flex flex-col md:justify-center md:items-center md:w-1/2 mx-auto pt-14 pb-14 h-screen overflow-x-hidden">
          
        <div id="freshProj" class="uppercase whitespace-nowrap">
            fresh project<span class="text-red-500 mx-4">*</span>
            fresh project<span class="text-red-500 mx-4">*</span>
            fresh project<span class="text-red-500 mx-4">*</span>
            fresh project<span class="text-red-500 mx-4">*</span>
            fresh project<span class="text-red-500 mx-4">*</span>
            fresh project<span class="text-red-500 mx-4">*</span>
        </div>
        <div class="relative w-full mx-auto h-full md:h-1/2">
            <a href="#">
                <img id="proj1" class="labels absolute object-cover h-full  w-full" src="../assets/banner.jpg" alt="">
            </a>
            <a href="##">
                <img id="proj2" class="labels absolute object-cover h-full  w-full" src="../assets/package.jpg" alt="">
            </a>
            <a href="###">
                <img id="proj3" class="labels absolute object-cover h-full  w-full" src="../assets/soldier.gif" alt="">
            </a>
        </div>

  </div>
</template>

<script setup>
import { onMounted } from '@vue/runtime-core'
import projectAnim from '../functions/projectAnim'

const { anim } = projectAnim()

onMounted(() => {
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