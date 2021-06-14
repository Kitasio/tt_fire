<template>
  <div id="container" class="bg-white font-brand-roman">
    <Nav />
    <router-view></router-view>
    <Links />
    <Contact />
  </div>
</template>

<script setup>
import Nav from './components/Nav.vue'
import Landing from './components/Landing.vue'
import Links from './components/Links.vue'
import Contact from './components/Contact.vue'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
body {
  overflow-x: hidden !important;
}
</style>
