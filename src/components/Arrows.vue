<template>
<div class="hidden lg:inline">
  <div id="arrow1" class="absolute w-0.5 mix-blend-difference bg-white"></div>
  <div id="arrow2" class="absolute w-0.5 mix-blend-difference bg-white"></div>
</div>
</template>

<script setup>
import { onMounted } from "@vue/runtime-core"
onMounted(() => {
  const tl1 = gsap.timeline({ repeat: -1 })
  tl1.from("#arrow1", { scaleY: 0, transformOrigin: "top", duration: .7, delay: 1, ease: "power2.out" })
  tl1.to("#arrow1", { scaleY: 0, transformOrigin: "bottom", duration: .7, ease: "power2.in" })

  const tl2 = gsap.timeline({ repeat: -1 })
  tl2.from("#arrow2", { scaleY: 0, transformOrigin: "top", duration: .7, delay: 1, ease: "power2.out" })
  tl2.to("#arrow2", { scaleY: 0, transformOrigin: "bottom", duration: .7, ease: "power2.in" })
})
</script>

<style>
#arrow1 {
    top: 28%;
    left: 11%;
    height: 45%;
}
#arrow2 {
    top: 28%;
    right: 11%;
    height: 45%;
}
</style>