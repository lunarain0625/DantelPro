<script setup lang="ts">
const props = defineProps({
  patient: Object
})
</script>

<template>
  <div class="p-4 flex flex-row ">
    <Image :src="patient?.images?.top_face_image" class="w-36" preview/>
    <div class="flex flex-col p-4 grow">
      <span v-if="patient?.case_no" class="text-sm text-right">ID: {{ props.patient?.case_no }}</span>
      <span class="text-2xl text-left font-bold">{{ props.patient?.patient_name }}</span>
      <span class="text-base text-left">{{ props.patient?.patient_sex }} | {{ props.patient?.patient_age }} years old</span>
<!--      <span class="text-base text-left">Doctor: {{ patient?.doctor }}</span>-->
<!--      <span class="text-base text-left">Clinic: {{ patient?.address_data?.name }}</span>-->
    </div>
  </div>
</template>

<style scoped>

</style>