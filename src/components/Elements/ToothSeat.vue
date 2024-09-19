<script setup lang="ts">
import {ref} from "vue";

const props = defineProps({
  patient: Object
})
const toothMap: any = {
  0: ["a", "Normal"],
  1: ["b", 'Missing'],
  2: ["c", "Removed"],
  3: ["d", "Unattachable"],
  4: ["e", "Immovable"],
}
const selectedKey = ref(0)
const changeSelectedKey = (key: any) => {
  selectedKey.value = parseInt(key);
}
const updateToothSeat = (key: string) => {
  props.patient.tooth_seat[key] = selectedKey.value;
}
</script>


<template>
  <div class="flex flex-col items-center">
    <div class="flex flex-row mb-2">
      <div class="flex flex-row-reverse items-end gap-1">
        <div v-for="(item, index) in Object.entries(patient?.tooth_seat).slice(0, 8)" :key="index"
             @click="updateToothSeat(item[0])">
          <img :src="`https://alpha.protectmec.com/images/teeth/${toothMap[item[1]][0]}/${index}.png`"/>
        </div>
      </div>
      <div class="flex flex-row items-end gap-1">
        <div v-for="(item, index) in Object.entries(patient?.tooth_seat).slice(8, 16)" :key="index"
             @click="updateToothSeat(item[0])">
          <img :src="`https://alpha.protectmec.com/images/teeth/${toothMap[item[1]][0]}/${index+8}.png`"/>
        </div>
      </div>
    </div>
    <div class="flex flex-row">
      <div class="flex flex-row-reverse items-start gap-1">
        <div v-for="(item, index) in Object.entries(patient?.tooth_seat).slice(24, 32)" :key="index"
             @click="updateToothSeat(item[0])">
          <img :src="`https://alpha.protectmec.com/images/teeth/${toothMap[item[1]][0]}/${index+24}.png`"/>
        </div>
      </div>
      <div class="flex flex-row items-start gap-1">
        <div v-for="(item, index) in Object.entries(patient.tooth_seat).slice(16, 24)" :key="index"
             @click="updateToothSeat(item[0])">
          <img :src="`https://alpha.protectmec.com/images/teeth/${toothMap[item[1]][0]}/${index+16}.png`"/>
        </div>
      </div>
    </div>
    <div class="flex flex-row gap-4">
      <div v-for="(value, key) in toothMap" class="card flex flex-col items-center" @click="changeSelectedKey(key)">
        <img :src="`https://alpha.protectmec.com/images/teeth/${value[0]}.png`" class="w-16 mr-2"/>
        <span :class="key == selectedKey?'text-primary font-bold':''">{{ value[1] }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
