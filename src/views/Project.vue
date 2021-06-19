<template>
  <div class="">
    <iframe :src="project.url" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" width="100%" height="800px" frameborder="0" seamless></iframe>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { onMounted, ref } from "vue"
import getProject from '../functions/getProject'

const route = useRoute()
const id = route.params.id

const { project, error, load } = getProject()
onMounted(() => {
  load(id)
})
</script>

<style>

</style>