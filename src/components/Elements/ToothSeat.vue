<script setup lang="ts">
import {NEW_PATIENT} from "../../assets/CONSTANT.js";

const props = defineProps({
  options: Array,
  modelValue: String,
})
const emit = defineEmits(['update:modelValue'])

const patient = ref(NEW_PATIENT);
</script>

<template>
  <div class=" flex flex-wrap gap-2">
    <div v-for="(value, key, index) in patient.tooth_seat" :key="key">
      <span>{{ key }}:{{ value }}:{{ index}}</span>

    </div>
  </div>
</template>

<style scoped>

</style>