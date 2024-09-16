<script setup lang="ts">
import {NEW_PATIENT} from "../../assets/CONSTANT.js";

const props = defineProps({
  options: Array,
  modelValue: String,
})
const emit = defineEmits(['update:modelValue'])
const patient = ref(NEW_PATIENT);
const teeth = ref([
  0,
  2,
  4,
  4,
  3,
  4,
  3,
  3,
  3,
  1,
  0,
  4,
  4,
  1,
  1,
  0,
  3,
  3,
  0,
  0,
  4,
  4,
  2,
  4,
  4,
  2,
  2,
  3,
  2,
  0,
  4,
  3
])
// const teeth = ref(Object.values(patient.value.tooth_seat));
//https://alpha.protectmec.com/images/teeth/a/0.png
//https://alpha.protectmec.com/images/teeth/a.png
//11-18 左上 7-0
//21-28 右上 8-15
//31-38 右下 16-23
//41-48 左下 24-31
console.log('value', Object.values(patient.value.tooth_seat))
const toothMap = {
  0: "a",
  1: "b",
  2: "c",
  3: "d",
  4: "e",
}
</script>


<template>
  <div class="flex flex-col bg-yellow-300 items-center">
    <div class="flex flex-row mb-2">
      <div class="flex flex-row-reverse items-end gap-1">
        <div v-for="(value, key) in teeth.slice(0, 8)" :key="key">
          <img :src="`https://alpha.protectmec.com/images/teeth/${toothMap[value]}/${key}.png`"/>
        </div>
      </div>
      <div class="flex flex-row items-end gap-1">
        <div v-for="(value, key) in teeth.slice(8, 16)" :key="key">
          <img :src="`https://alpha.protectmec.com/images/teeth/${toothMap[value]}/${key+8}.png`"/>
        </div>
      </div>
    </div>
    <div class="flex flex-row">
      <div class="flex flex-row-reverse items-start gap-1">
        <div v-for="(value, key) in teeth.slice(24, 32)" :key="key">
          <img :src="`https://alpha.protectmec.com/images/teeth/${toothMap[value]}/${key+24}.png`"/>
        </div>
      </div>
      <div class="flex flex-row items-start gap-1">
        <div v-for="(value, key) in teeth.slice(16, 24)" :key="key">
          <img :src="`https://alpha.protectmec.com/images/teeth/${toothMap[value]}/${key+16}.png`"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>