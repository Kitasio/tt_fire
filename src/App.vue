<template>
  <div id="container relative" class="bg-white font-brand-roman">
    <Nav />
    <router-view></router-view>
    <Links />
    <Contact @click="toggleContact = false" class="cursor-pointer" />
    <ContactUs :isHidden="toggleContact" @close="toggleContact = true" />
  </div>
</template>

<script setup>
import Nav from './components/Nav.vue'
import Landing from './components/Landing.vue'
import Links from './components/Links.vue'
import Contact from './components/Contact.vue'
import ContactUs from './components/ContactUs.vue'
import { ref } from '@vue/reactivity'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
const toggleContact = ref(true)
</script>

<style>
body {
  overflow-x: hidden !important;
}
</style>
