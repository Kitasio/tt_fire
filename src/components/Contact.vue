<template>
    <div class="contact mr-3 mb-3 flex w-40 fixed bottom-0 mix-blend-difference right-0 md:mr-main-x md:mb-main-y">

            <img id="contact1" class="contact-y absolute w-full" src="/icons/contact.png" alt="">
            <img id="contact2" class="contact-y absolute w-full" src="/icons/contact.png" alt="">

    </div>  
</template>

<script setup>
import { onMounted } from "@vue/runtime-core"

const contactAnim = () => {
    const tl = gsap.timeline({repeat: -1, ease: "power4.in"})
    const tl2 = gsap.timeline({repeat: -1, ease: "power4.in"})

    tl.set("#contact1", {scaleY: 0, transformOrigin: "top"})
    tl.to("#contact1", {scaleY: .5, duration: .2, transformOrigin: "bottom", ease: "out"})
    tl.to("#contact1", {scaleY: 1, duration: .8, transformOrigin: "bottom", ease: "in"})
    tl2.to("#contact2", {scaleY: .5, duration: .2, transformOrigin: "top", ease: "in"})
    tl2.to("#contact2", {scaleY: 0, duration: .8, transformOrigin: "top", ease: "out"})
}
onMounted(() => {
    contactAnim()
})
</script>

<style>
@media only screen and (min-width: 768px) {
    .contact {
        width: 9vw !important;
    }
}
.contact-y {
    margin-top: -21.5%;
}
</style>