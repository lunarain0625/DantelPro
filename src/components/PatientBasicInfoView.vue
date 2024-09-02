<script setup lang="ts">
import {onMounted, ref} from "vue";
import json from '../service/exp_patient.json'

const patient = ref(json.data);
</script>

<template>
  <div class="p-4 flex flex-row ">
    <Image :src="patient?.top_face_image" class="w-36" preview/>
    <div class="flex flex-col p-4 grow">
      <span class="text-sm text-right">ID: {{ patient?.case_no }}</span>
      <span class="text-2xl text-left font-bold">{{ patient?.patient_name }}</span>
      <span class="text-base text-left">{{ patient?.patient_sex }} | {{ patient?.patient_age }} years old</span>
      <span class="text-base text-left">Doctor: {{ patient?.doctor }}</span>
      <span class="text-base text-left">Clinic: {{ patient?.address_data?.name }}</span>
    </div>
  </div>
</template>

<style scoped>

</style>