<script setup lang="ts">

import MyRadioButton from "../Elements/MyRadioButton.vue";
import {
  anshiOptions,
  gaodiOptions,
  guxingOptions,
  illnessLogOptions,
  likedescOptions,
  sexOptions
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
    <div class="flex flex-row">
      <span class="title"> <span class="text-red-500">*</span>Patient Name:</span>
      <InputText type="text" v-model="patient.patient_name"/>
    </div>

    <div class="flex flex-row">
      <span class="title"><span class="text-red-500">*</span>Gender:</span>
      <MyRadioButton v-model="patient.patient_sex" :options="sexOptions"/>
    </div>
    <div class="flex flex-row">
      <span class="title"><span class="text-red-500">*</span>Age:</span>
      <InputNumber v-model="patient.patient_age" inputId="integeronly"/>
    </div>
<!--    <div class="flex flex-row">-->
<!--      <span class="title"><span class="text-red-500">*</span>所属机构:</span>-->
<!--      <span>所属机构</span>-->
<!--    </div>-->
    <div class="flex flex-row">
      <span class="title">Angle's classification:</span>
      <MyRadioButton v-model="patient.anshi" :options="anshiOptions"/>
    </div>
    <div class="flex flex-row">
      <span class="title">bone classification:</span>
      <MyRadioButton v-model="patient.guxing" :options="guxingOptions"/>
    </div>
    <div class="flex flex-row">
      <span class="title">FMA:</span>
      <MyRadioButton v-model="patient.gaodi" :options="gaodiOptions"/>
    </div>
    <div class="flex flex-row">
      <span class="title">Chief complaint/medical history:</span>
      <div class="flex flex-col gap-2">
        <Textarea v-model="patient.illness_log" autoResize rows="5" cols="60"/>
        <InputChips :modelValue="patient.illness_log" @update:modelValue="$value => patient.illness_log += $value + ', '"
                    :options="illnessLogOptions"/>
      </div>
    </div>
    <div class="flex flex-row">
      <span class="title">target of treatment:</span>
      <div class="flex flex-col gap-2">
        <Textarea v-model="patient.likedesc" autoResize rows="5" cols="60"/>
        <InputChips :modelValue="patient.likedesc" @update:modelValue="$value => patient.likedesc += $value + ', '"
                    :options="likedescOptions"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  @apply w-32 text-right mr-4
}

</style>
