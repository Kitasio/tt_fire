<template>
  <div @keyup.esc="closeModal" @click.self="closeModal"  :class="{ 'invisible opacity-0': isHidden }" class="flex transition-all duration-500 items-center h-screen z-30 w-full absolute bg-gray-800 bg-opacity-40 top-0">
      <div class="bg-white w-full h-2/3 md:w-1/2 mx-auto md:h-1/2 relative">
        <div id="requestSuccess" :class="{ 'hidden': isHidden }" class="invisible absolute w-full h-full flex items-center justify-center font-brand-roman text-lg p-5">
            <p>YOUR REQUEST HAS BEEN SENT, THANK YOU!</p>
        </div>
        <div id="formFields" class="p-4 w-full h-full md:p-6 flex justify-between flex-col overflow-y-scroll">
            <div>
                <div class="stag uppercase text-5xl font-brand-bold lg:text-6xl mb-5 md:mb-7 2xl:text-7xl">contact us</div>
                <div class="space-y-3 md:space-y-6">
                    <input v-model="doc.name" class="stag border-b focus:outline-none text-xl border-black w-full" type="text" placeholder="Name" required>
                    <input v-model="doc.email" class="stag border-b focus:outline-none text-xl border-black w-full" type="email" placeholder="Email" required>
                    <input v-model="doc.messenger" class="stag border-b focus:outline-none text-xl border-black w-full" type="text" placeholder="Telegram, Whatsapp, etc...">
                    <textarea v-model="doc.request" class="stag border-b transition-all duration-700 h-8 focus:h-32 focus:outline-none text-xl border-black w-full" id="txt" name="request" rows="1" placeholder="Describe your request..."></textarea>
                </div>
            </div>
            <div @click="submit" class="stag flex justify-end cursor-pointer">
                <div class="uppercase text-xl border-black border-2 px-7 py-1">submit</div>
            </div>
        </div>
      </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmit } from 'vue'
import axios from 'axios'

const props = defineProps(['isHidden'])
const emits = defineEmit(['close'])

const closeModal = () => {
    emits('close')
}

const submit = () => {
    axios.post("https://twentytwos.xyz/tg/clientRequest", {
        name: doc.value.name,
        email: doc.value.email,
        messenger: doc.value.messenger,
        request: doc.value.request,
    })

    const tl = gsap.timeline()
    tl.to(".stag", { y: -200, opacity: 0, stagger: 0.05 })
    tl.set("#requestSuccess", { visibility: "visible"})
    tl.from("#requestSuccess", { y: 200, opacity: 0, duration: 1})

    setTimeout(() => closeModal(), 3000)
}

const doc = ref({
    name: '',
    email: '',
    messenger: '',
    request: '',
})
</script>

<style>
#txt {
    height: 30px;
    transition: all .7s;
    -webkit-transition: all .7s; /* Safari */
}
#txt:focus {
    height:100px;
}
.hide-modal {
    width: 0px !important;
    transform-origin: center !important;
}
</style>