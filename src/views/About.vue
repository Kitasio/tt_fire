<template>
  <div class="h-screen py-14 md:flex items-center">
    <div id="about-container" style="background-color: #eeeeee" class="h-full mix-blend-difference md:h-1/2 md:w-2/3 md:mx-auto xl:w-1/2 overflow-y-scroll overscroll-auto">
  <Arrows />

      <div class="grid relative border-gray-500 border-b grid-cols-2 md:grid-cols-3 h-64">
        <div class="text-3xl uppercase pt-2 md:pt-5 pl-3 absolute md:relative md:border-r border-gray-500 md:w-full">services</div>
        <div class="border-gray-500 md:border-r mx-auto my-16 md:my-0 md:py-5 md:pl-10 lg:pl-16 whitespace-nowrap text-sm md:text-base space-y-6 md:space-y-10 md:w-full">
          <div>brand identity</div>
          <div>websites</div>
          <div>illustrations</div>
          <div>sound design</div>
        </div>
        <div class="my-16 md:my-0 md:py-5 md:pr-16 text-sm md:text-base md:pl-10 lg:pl-16 whitespace-nowrap space-y-6 md:space-y-10 md:w-full">
          <div>motion graphics</div>
          <div>design systems</div>
          <div>editorial design</div>
          <div>3d modeling</div>
        </div>
      </div>

      <div class="flex flex-col px-2 md:p-0 border-gray-500 border-b pb-10 md:mb-0 py-3 md:flex-row md:justify-between h-80 sm:h-64 md:min-h-64">
        <div class="text-3xl uppercase pb-2 pl-2 md:pl-3 md:pt-4 md:border-r border-gray-500 md:w-1/3">about us</div>
        <div class="md:w-2/3 text-sm md:text-base px-10 md:px-16 py-5 md:py-4">
          <div class="lowercase mb-5">TWENTY TWOS IS A TEAM OF <span style="color: #ff00b8;">ARTISTS, DESIGNERS, MUSICIANS AND PROGRAMMERS</span>, WHICH ARE REALLY EXCITED ABOUT THE WORLD AND ITS VISUAL. </div>
          <div class="lowercase mb-5">Our Russian-based team work with clients around the world.</div>
          <div class="lowercase">OUR CORE NOT ONLY TO CREATE BUT TO INSPIRE THE WORLD. Always searching for new ways to make our clients thrive.</div>
        </div>
      </div>

      <div class="grid relative border-gray-500 border-b grid-cols-2 md:grid-cols-3 h-64">
        <div class="text-3xl uppercase pt-2 md:pt-5 pl-3 absolute md:relative md:border-r border-gray-500 md:w-full">some clients</div>
        <div class="border-gray-500 md:border-r mx-auto my-16 pl-5 md:my-0 md:py-5 md:pl-10 lg:pl-16 whitespace-nowrap text-sm md:text-base space-y-6 md:space-y-10 md:w-full">
          <div>
            <a href="#" class="transition hover:text-brand-green">storytel</a>
          </div>
          <div>
            <a href="#" class="transition hover:text-brand-green">eksmo</a>
          </div>
          <div>
            <a href="#" class="transition hover:text-brand-green">dmitri glukhovski</a>
          </div>
          <div>
            <a href="#" class="transition hover:text-brand-green">samara university</a>
          </div>
        </div>
        <div class="my-16 pl-5 md:my-0 md:py-5 md:pr-16 text-sm md:text-base md:pl-10 lg:pl-16 whitespace-nowrap space-y-6 md:space-y-10 md:w-full">
          <div>
            <a href="#" class="transition hover:text-brand-green">adidas</a>
          </div>
          <div>
            <a href="#" class="transition hover:text-brand-green">nornikel</a>
          </div>
          <div>
            <a href="#" class="transition hover:text-brand-green">boris akunin</a>
          </div>
          <div>
            <a href="#" class="transition hover:text-brand-green">alexey ivanov</a>
          </div>
        </div>
      </div>

      <div class="flex flex-col px-2 md:p-0 border-gray-500 border-b pb-32 h-64 md:mb-0 py-3 md:flex-row md:justify-between">
        <div class="text-3xl uppercase pb-2 pl-2 md:pl-3 md:pt-4 md:border-r border-gray-500 md:w-1/3">conclusion</div>
        <div class="md:w-2/3 text-sm md:text-base px-10 md:px-16 py-5 md:py-4">
          <div class="lowercase mb-5">Let’s work together ladies and gentlemen, <span style="color: #ff00b8;">we are into it!</span></div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import Arrows from '../components/Arrows.vue'

</script>

<style>
/* #about-container {
  scrollbar-width: thin;
  scrollbar-color: #eee #eee;


} */
</style>