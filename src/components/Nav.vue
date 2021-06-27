<template>
  <div class="mix-blend-difference mt-main-y w-full fixed z-20">
      <div class="flex md:justify-center w-screen">
            <div class="md:hidden h-8 flex justify-between items-center w-full mt-main-y mx-main-x">
              <router-link to="/">
                <img class="w-28" src="/logo.png" alt="">
              </router-link>
              <div id="burger" @click="toggleNav(); burgerAnim();" class="mr-2 md:hidden cursor-pointer">
                  <div id="burger1"></div>
                  <div id="burger2"></div>
                  <div id="burger3"></div>
              </div>
            </div>
            <div class="md:flex hidden md:relative">
              <router-link to="/">
                <img id="logo1" class="absolute ml-main-x" style="max-width: 9.3vw; max-height: 3.3rem;" src="/logo.png" alt="">
                <img id="logo2" class="absolute ml-main-x" style="max-width: 9.3vw; max-height: 3.3rem;" src="/logo.png" alt="">
              </router-link>
              <img style="max-width: 84.4%; margin-left: 14%" class="object-fit mr-main-x" src="/desktop.png" alt="">
            </div>
      </div>
      <Navlinks @changePage="test" />
  </div>
</template>

<script setup>
import Navlinks from './Navlinks.vue'
import { onMounted } from '@vue/runtime-core'
import logoAnim from '../functions/logoAnim'
import { defineEmit, defineProps } from 'vue'

const { animLogo } = logoAnim()
onMounted(() => {
    animLogo()
})
const test = () => {
  console.log("asfafasfasf suka test")
}
const emits = defineEmit(['toggle'])
const props = defineProps(['burgerState'])

const burgerAnim = () => {
  if (props.burgerState == true) {
    const tl = gsap.timeline({ pause: true })
    tl.to("#burger1", { y: 10, duration: 0.3 })
    tl.to("#burger3", { y: -10, duration: 0.3 }, "-=.3")
    tl.set("#burger2", {opacity: 0})

    tl.to("#burger1", { rotate: 45, duration: .2 })
    tl.to("#burger3", { rotate: -45, duration: .2 }, "-=.2")
  }

  if (props.burgerState == false) {
    const tl = gsap.timeline({ pause: true })
    tl.to("#burger1", { rotate: 0, duration: .2 })
    tl.to("#burger3", { rotate: 0, duration: .2 }, "-=.2")

    tl.set("#burger2", {opacity: 1})
    tl.to("#burger1", { y: -1, duration: .3 })
    tl.to("#burger3", { y: 1, duration: .3 }, "-=.3")
  }
}
const toggleNav = () => {
    emits('toggle')
}
</script>

<style>
#burger1 {
    height: 5px;
    width: 35px;
    background-color: white;
    margin-bottom: 5px;
}
#burger2 {
    height: 5px;
    width: 35px;
    background-color: white;
    margin-bottom: 5px;
}
#burger3 {
    height: 5px;
    width: 35px;
    background-color: white;
}
</style>