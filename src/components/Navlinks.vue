<template>
    <div class="flex w-full h-screen row-start-6 row-end-7 text-white main-text md:w-full md:h-auto md:mt-3 fixed items-end md:items-start font-brand-light justify-between uppercase tracking-wider text-justify cursor-pointer">
        <router-link to="/portfolio" class="mt-10 mr-6 md:mt-0 md:ml-main-x">portfolio</router-link>
        <router-link to="/about" id="about" class="flex mb-32 mr-6 md:mb-0 md:mr-0">
            <div>about</div>
            <div class="" style="width: 1.2vw"></div>
            <div>us</div>
        </router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.main-text {
    writing-mode: vertical-lr;
}
@media only screen and (min-width: 768px) {
    #about {
        margin-right: 0.7vw !important;
    }
    .main-text {
        writing-mode:initial;
        font-size: 1.6vw;
    }
}


</style>