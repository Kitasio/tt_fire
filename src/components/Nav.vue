<template>
  <div class="mix-blend-difference mt-main-y w-full fixed">
      <div class="flex md:justify-center w-screen">
            <div class="md:hidden h-8 flex justify-between items-center w-full mt-main-y mx-main-x">
              <router-link to="/">
                <img class="w-28" src="/logo.png" alt="">
              </router-link>
              <div id="burger" class="mr-3 md:hidden">
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
      <Navlinks />
  </div>
</template>

<script setup>
import Navlinks from './Navlinks.vue'
import { onMounted } from '@vue/runtime-core'
import logoAnim from '../functions/logoAnim'

const { animLogo } = logoAnim()
onMounted(() => {
    animLogo()
})
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