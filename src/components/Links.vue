<template>
    <div class="icon-box-size mix-blend-difference w-1/3 mb-5 ml-3 flex justify-between items-center fixed bottom-0 md:mx-main-x md:my-main-y">
        <div v-for="(icon, index) in icons" :key="index">
            <a :href="icon.url">
                <img :class="icon.css" :src="icon.path" alt="">
            </a>
        </div>
    </div>

</template>

<script setup>
import { ref } from "vue";

const icons = ref([
    {
        path: '/icons/tg.png',
        url: '#',
        css: 'w-5 2xl:w-6',
    },
    {
        path: '/icons/beh.png',
        url: '#',
        css: 'w-6 2xl:w-7',
    },
    {
        path: '/icons/inst.png',
        url: '#',
        css: 'w-5 2xl:w-6',
    },
])
</script>

<style>
@media only screen and (min-width: 768px) {
    .icon-box-size {
        width: 9vw !important;
    }
}
</style>