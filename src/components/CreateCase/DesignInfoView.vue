<script setup lang="ts">

import MyRadioButton from "../Elements/MyRadioButton.vue";
import {
  anshiOptions, fixedFaceSeventhOptions, fixedFaceSixthOptions, fixedSlotOptions,
  gaodiOptions,
  guxingOptions,
  illnessLogOptions,
  likedescOptions, setPlanOptions,
  sexOptions, useTypeOptions
} from "../../assets/CONSTANT.js";
import json from "../../service/exp_patient.json";
import {ref} from "vue";

const patient = ref(json.data);

const onClick = () => {
  console.log(patient.value)
}
</script>

<template>

  <div class="flex flex-col gap-4">
    <span class="text-left text-2xl">设计信息</span>
    <div class="flex flex-row">
      <span class="title"> <span class="text-red-500">*</span>应用类型:</span>
      <MyRadioButton v-model="patient.use_type" :options="useTypeOptions"/>
    </div>

    <div class="flex flex-row">
      <span class="title"><span class="text-red-500">*</span>托槽:</span>
      <Select v-model="patient.fixed_slot" :options="fixedSlotOptions" optionLabel="label" optionValue="value"
              class="w-full md:w-56"/>
    </div>
    <div class="flex flex-row">
      <span class="title"><span class="text-red-500">*</span>颊面管:</span>
      <span>6#</span>
      <Select v-model="patient.fixed_face" :options="fixedFaceSixthOptions" optionLabel="label" optionValue="value"
              class="w-full md:w-56"/>
      <span>7#</span>
      <Select v-model="patient.fixed_face2" :options="fixedFaceSeventhOptions" optionLabel="label" optionValue="value"
              class="w-full md:w-56"/>
    </div>
    <div class="flex flex-row">
      <span class="title"><span class="text-red-500">*</span>托槽备注:</span>
      <Textarea v-model="patient.fixed_slot_desc" autoResize rows="1" cols="60"/>
    </div>
    <div class="flex flex-row">
      <span class="title">定位方案:</span>
      <MyRadioButton v-model="patient.set_plan" :options="setPlanOptions"/>
    </div>
    <div class="flex flex-row w-full ">
      <Panel toggleable>
        <template #header>
          <div class="flex gap-2 bg-neutral-200 w-full">
            <span>特殊设计要求及情况:</span>
          </div>
        </template>
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Panel>
    </div>
    <div class="flex flex-row">
      <span class="title">牙位信息:</span>
    </div>
    <div class="flex flex-row">
      <span class="title">补充信息:</span>

    </div>


    <Button label="Submit" icon="pi pi-check" @click="onClick"/>
  </div>
</template>

<style scoped>
.title {
  @apply w-32 text-right mr-4
}

</style>