<template>
  <div id="main-anim" class="flex flex-col md:justify-center md:items-center md:w-1/2 mx-auto pt-14 pb-14 h-screen overflow-hidden">
          
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
                <img class="proj1 labels z-10 absolute object-cover h-full w-full" src="/img/dz.jpg" alt="">
                <img class="proj1 hover-img lables z-20 absolute object-cover opacity-0 h-full w-full" src="/img/dz_hover.jpg" alt="">
            </router-link>
            <router-link to="/portfolio/post">
                <img class="proj2 labels z-10 absolute object-cover h-full w-full" src="/img/post.jpg" alt="">
                <img class="proj2 hover-img z-20 absolute object-cover h-full opacity-0 w-full" src="/img/post_hover.jpg" alt="">
            </router-link>
            <router-link to="/portfolio/TT">
                <img class="proj3 labels z-10 absolute object-cover h-full  w-full" src="/img/tt.jpg" alt="">
                <img class="proj3 hover-img z-20 absolute object-cover h-full opacity-0 w-full" src="/img/tt_hover.jpg" alt="">
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

    gsap.utils.toArray(".hover-img").forEach(img => {
        let hover = gsap.to(img, { duration: .7, opacity: 1, paused: true, ease: "power2.inOut" })
        img.addEventListener("mouseenter", () => hover.play());
        img.addEventListener("mouseleave", () => hover.reverse());
    })
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