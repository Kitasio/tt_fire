<template>
    <div class="flex w-full h-screen row-start-6 row-end-7 text-white main-text md:w-full md:h-auto md:mt-3 fixed items-end md:items-start font-brand-light justify-between uppercase tracking-wider text-justify cursor-pointer">
        <router-link to="/portfolio" class="w-32 h-4 relative mt-10 mr-6 md:mt-0 md:ml-main-x">
            <img id="portfolio1" class="w-32 absolute" src="/src/assets/portfolio.png" alt="">
            <img id="portfolio2" class="w-32 absolute" src="/src/assets/portfolio.png" alt="">
        </router-link>
        <router-link to="/about" id="about" class="flex mb-32 mr-6 md:mb-0 md:mr-0">
            <div>about</div>
            <div class="" style="width: 1.2vw"></div>
            <div>us</div>
        </router-link>
    </div>
</template>

<script setup>
import { onMounted } from "@vue/runtime-core"

onMounted(() => {
    const portfolio = gsap.timeline({ delay: 1 })
    portfolio.set("#portfolio2", { scaleX: 0 })
    portfolio.to("#portfolio2", { scaleX: 1, duration: 2, transformOrigin: "left" })
    portfolio.to("#portfolio1", { scaleX: 0, duration: 2, transformOrigin: "right" }, "-=2")
})
</script>

<style>
.main-text {
    writing-mode: vertical-lr;
}
@media only screen and (min-width: 768px) {
    #about {
        margin-right: 1.5vw !important;
    }
    .main-text {
        writing-mode:initial;
        font-size: 1.6vw;
    }
}


</style>