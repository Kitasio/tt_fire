<template>
  <div id="container" class="bg-white font-brand-roman overflow-hidden max-h-screen">
    <Nav @toggle="toggleBurger = !toggleBurger" :burgerState="toggleBurger" />

    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition || 'fade'">
        <component :is="Component" />
      </transition>
    </router-view>

    <Links />
    <Contact @click="toggleContact = false" class="cursor-pointer" />
    <ContactUs :isHidden="toggleContact" @close="toggleContact = true" />
    <MobileContact :isHidden="toggleBurger" />
  </div>
</template>

<script setup>
import Nav from './components/Nav.vue'
import Landing from './components/Landing.vue'
import Links from './components/Links.vue'
import Contact from './components/Contact.vue'
import ContactUs from './components/ContactUs.vue'
import MobileContact from './components/MobileContact.vue'
import { ref } from '@vue/reactivity'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
const toggleContact = ref(true)
const toggleBurger = ref(true)
</script>

<style>
body {
  overflow-x: hidden !important;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.abo-enter-active{
  mix-blend-mode: difference;
  transition: opacity .5s ease;
}

.abo-enter-from,
.abo-leave-to {
  mix-blend-mode: difference;
  opacity: 0;
}
</style>
