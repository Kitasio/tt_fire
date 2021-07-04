<template>
    <div class="hidden md:flex h-screen row-start-6 row-end-7 text-white main-text md:w-full md:h-auto md:mt-3 fixed items-end md:items-start font-brand-light justify-between uppercase tracking-wider text-justify cursor-pointer">
        <router-link to="/portfolio" @mouseenter="portAnim" @mouseleave="leavePort" id="portfolio" class="relative mt-10 mr-6 md:mt-0 md:ml-main-x">
            <span class="mix-blend-difference">
                <img id="portfolio1" class="absolute" src="/src/assets/portfolio.png" alt="">
                <img id="portfolio2" class="absolute" src="/src/assets/portfolio.png" alt="">
            </span>
        </router-link>
        
        <router-link to="/about" @mouseenter="aboutAnim" @mouseleave="leaveAbout" id="about" class="relative mt-10 ml-6 md:mt-0 md:mr-main-x">
            <span class="mix-blend-difference">
                <img id="about1" class="absolute" src="/src/assets/about.png" alt="">
                <img id="about2" class="absolute" src="/src/assets/about.png" alt="">
            </span>
        </router-link>
    </div>
</template>

<script setup>
import { onMounted, ref } from "@vue/runtime-core"
import {defineEmit} from 'vue'
const emits = defineEmit(['changePage'])
const changePage = () => {
    emits('changePage')
}

const portfolio = gsap.timeline({ repeat: -1 })
const about = gsap.timeline({ repeat: -1 })
const portAnim = () => {
    portfolio.restart()
    portfolio.set("#portfolio1", { scaleX: 0 })
    portfolio.set("#portfolio2", { scaleX: 1 })
    portfolio.to("#portfolio1", { scaleX: 1, duration: 2, transformOrigin: "left" })
    portfolio.to("#portfolio2", { scaleX: 0, duration: 2, transformOrigin: "right" }, "-=2")
}
const aboutAnim = () => {
    about.restart()
    about.set("#about1", { scaleX: 0 })
    about.set("#about2", { scaleX: 1 })
    about.to("#about1", { scaleX: 1, duration: 2, transformOrigin: "left" })
    about.to("#about2", { scaleX: 0, duration: 2, transformOrigin: "right" }, "-=2")
}
const leavePort = () => {
    portfolio.call(() => {
        portfolio.clear()
    })
}
const leaveAbout = () => {
    about.call(() => {
        about.clear()
    })
}
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
    #portfolio {
        width: 9%;
    }
    #about {
        width: 9.25%;
    }
}


</style>