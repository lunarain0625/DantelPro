<script setup lang="ts">
const props = defineProps({
  patient: Object
})
const downloadModel = (url: string) => {
  if (!url) {
    return
  }
  console.log(url)
  window.open(url)
}

</script>

<template>
  <div class="flex items-center">
    <i class="pi pi-pen-to-square text-primary m-4" style="font-size: 1.5rem"></i>
    <span class="font-bold text-2xl text-primary">Model Information</span>
  </div>
  <div class="flex flex-row gap-2">
    <Button v-if="patient?.stl_up" label="Download Maxillary Model" icon="pi pi-download"
            @click="downloadModel(patient?.stl_up)"/>
    <Button v-if="patient?.stl_down" label="Download Mandibular Model" icon="pi pi-download"
            @click="downloadModel(patient?.stl_down)"/>
    <Button v-if="patient?.stl_all" label="Download Bite Model" icon="pi pi-download"
            @click="downloadModel(patient?.stl_all)"/>
  </div>
</template>

<style scoped>

</style>
