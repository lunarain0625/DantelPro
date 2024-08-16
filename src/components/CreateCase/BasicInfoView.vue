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
    <span class="text-left text-2xl">患者信息</span>
    <div class="flex flex-row">
      <span class="title"> <span class="text-red-500">*</span>患者姓名:</span>
      <InputText type="text" v-model="patient.patient_name"/>
    </div>

    <div class="flex flex-row">
      <span class="title"><span class="text-red-500">*</span>性别:</span>
      <MyRadioButton v-model="patient.patient_sex" :options="sexOptions"/>
    </div>
    <div class="flex flex-row">
      <span class="title"><span class="text-red-500">*</span>年龄:</span>
      <InputNumber v-model="patient.patient_age" inputId="integeronly"/>
    </div>
    <div class="flex flex-row">
      <span class="title"><span class="text-red-500">*</span>所属机构:</span>
      <span>所属机构</span>
    </div>
    <div class="flex flex-row">
      <span class="title">安氏分类:</span>
      <MyRadioButton v-model="patient.anshi" :options="anshiOptions"/>
    </div>
    <div class="flex flex-row">
      <span class="title">骨性分类:</span>
      <MyRadioButton v-model="patient.guxing" :options="guxingOptions"/>
    </div>
    <div class="flex flex-row">
      <span class="title">FMA:</span>
      <MyRadioButton v-model="patient.gaodi" :options="gaodiOptions"/>
    </div>
    <div class="flex flex-row">
      <span class="title">主诉/病史:</span>
      <div class="flex flex-col gap-2 items-end">
        <Textarea v-model="patient.illness_log" autoResize rows="5" cols="60"/>
        <InputChips :modelValue="patient.illness_log" @update:modelValue="$value => patient.illness_log += $value + ','"
                    :options="illnessLogOptions"/>
      </div>
    </div>
    <div class="flex flex-row">
      <span class="title">矫治目标:</span>
      <div class="flex flex-col gap-2 items-end">
        <Textarea v-model="patient.likedesc" autoResize rows="5" cols="60"/>
        <InputChips :modelValue="patient.likedesc" @update:modelValue="$value => patient.likedesc += $value + ','"
                    :options="likedescOptions"/>
      </div>
    </div>


    <Button label="Submit" icon="pi pi-check" @click="onClick"/>
  </div>
</template>

<style scoped>
.title {
  @apply w-32 text-right mr-4
}

</style>