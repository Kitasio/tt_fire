<template>
  <div @keyup.space="closeModal" @click.self="closeModal"  :class="{ 'invisible opacity-0': isHidden }" class="flex transition-all duration-500 items-center h-screen z-30 w-full absolute bg-gray-800 bg-opacity-40 top-0">
      <div class="bg-white w-full h-2/3 md:w-1/2 mx-auto md:h-1/2">
        <div class="p-4 w-full h-full md:p-6 flex justify-between flex-col overflow-y-scroll">
            <div>
                <div class="uppercase text-5xl font-brand-bold lg:text-6xl mb-5 md:mb-7 2xl:text-7xl">contact us</div>
                <div class="space-y-3 md:space-y-6">
                    <input v-model="doc.name" class="border-b focus:outline-none text-xl border-black w-full" type="text" placeholder="Name" required>
                    <input v-model="doc.email" class="border-b focus:outline-none text-xl border-black w-full" type="email" placeholder="Email" required>
                    <input v-model="doc.messenger" class="border-b focus:outline-none text-xl border-black w-full" type="text" placeholder="Telegram, Whatsapp, etc...">
                    <textarea v-model="doc.request" class="border-b transition-all duration-700 h-8 focus:h-32 focus:outline-none text-xl border-black w-full" id="txt" name="request" rows="1" placeholder="Describe your request..."></textarea>
                </div>
            </div>
            <div @click="submit" class="flex justify-end cursor-pointer">
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
    axios.post("http://178.154.205.40/tg/clientRequest", {
        name: doc.value.name,
        email: doc.value.email,
        messenger: doc.value.messenger,
        request: doc.value.request,
    })
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
</style>