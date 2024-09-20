<script setup lang="ts">

import MyRadioButton from "../Elements/MyRadioButton.vue";
import {
  BRACKETS_REMARKS_PLACEHOLDER,
  centerCorrectionImproveOptions,
  centerCorrectionOptions, closeCorrectOptions,
  fixedFaceSeventhOptions,
  fixedFaceSixthOptions,
  fixedSlotOptions,
  jiuzhengguanxiAdjustOptions, jiuzhengguanxiOptions, kuogongOptions,
  quyouOptions,
  setPlanOptions,
  tuocaoOptions,
  useTypeOptions, verticalOptions,
  yaoheOptions
} from "../../assets/CONSTANT.js";
import {ref} from "vue";
import SpecialDesignCheckBoxes from "../Elements/SpecialDesignCheckBoxes.vue";
import ToothSeat from "../../components/Elements/ToothSeat.vue";

const props = defineProps({
  patient: Object
})
const leftStatus = ref("");
const leftAdjust = ref("");
const rightStatus = ref("");
const rightAdjust = ref("");
const updateAdjust = () => {
  console.log('changed')
  let left;
  let right;
  if (leftStatus.value === "调整") {
    left = "左-" + leftStatus.value + "-" + leftAdjust.value
  } else if (leftStatus.value === "维持") {
    left = "左-" + leftStatus.value
  } else {
    left = "左-无"
  }
  if (rightStatus.value === "调整") {
    right = "右-" + rightStatus.value + "-" + rightAdjust.value
  } else if (rightStatus.value === "维持") {
    right = "右-" + rightStatus.value
  } else {
    right = "右-无"
  }
  if (props.patient) {
    props.patient.jiuzhengguanxi = left + " | " + right
    props.patient.rectify_left = left
    props.patient.rectify_right = right
  }
}
</script>

<template>

  <div class="flex flex-col gap-4">
    <div class="flex flex-row items-center">
      <span class="title"><span class="text-red-500">*</span>Application type:</span>
      <MyRadioButton v-model="patient?.use_type" :options="useTypeOptions"/>
    </div>

    <div class="flex flex-row items-center">
      <span class="title"><span class="text-red-500">*</span>Bracket:</span>
      <Select v-model="patient?.fixed_slot" :options="fixedSlotOptions" optionLabel="label" optionValue="value"
              class="w-full md:w-56"/>
    </div>
    <div class="flex flex-row items-center gap-2">
      <span class="title">Buccal tube:</span>
      <span>6#</span>
      <Select v-model="patient?.fixed_face" :options="fixedFaceSixthOptions" optionLabel="label" optionValue="value"
              class="w-full md:w-56"/>
      <span>7#</span>
      <Select v-model="patient?.fixed_face2" :options="fixedFaceSeventhOptions" optionLabel="label" optionValue="value"
              class="w-full md:w-56"/>
    </div>
    <div class="flex flex-row">
      <span class="title">Remarks for brackets:</span>
      <Textarea :placeholder="BRACKETS_REMARKS_PLACEHOLDER" v-model="patient?.fixed_slot_desc" autoResize rows="2"
                cols="60"/>
    </div>
    <div class="flex flex-row">
      <span class="title">Positioning scheme:</span>
      <MyRadioButton v-model="patient?.set_plan" :options="setPlanOptions"/>
    </div>
    <Panel header="Special design requirements and situations:" toggleable>
      <div class="flex flex-col gap-4">
        <div class="flex flex-row">
          <span class="title">Special design:</span>
          <SpecialDesignCheckBoxes v-model="patient?.tssheji"/>
        </div>
        <div class="flex flex-row items-center">
          <span class="title">For brackets with occlusal interference:</span>
          <Select v-model="patient?.tsqingkuang_yaohe" :options="yaoheOptions" optionLabel="label" optionValue="value"
                  class="w-full md:w-56"/>
        </div>
        <div class="flex flex-row items-center">
          <span class="title">For cases that bracket base frequently interferences with the gingiva:</span>
          <Select v-model="patient?.tsqingkuang_tuocao" :options="tuocaoOptions" optionLabel="label"
                  optionValue="value"
                  class="w-full md:w-56"/>
        </div>
      </div>
    </Panel>
    <div class="flex flex-col gap-4 ">
      <span class="title">Teeth position:</span>
      <ToothSeat :patient="patient"/>
      <Textarea placeholder="Remarks: Less than 200 words..." v-model="patient?.tooth_seat_desc" autoResize rows="3"
                cols="60"/>
    </div>
    <Panel header="Supplementary Information:" toggleable>
      <div class="grid grid-cols-2 gap-4">
        <div class="flex flex-row items-center">
          <span class="title"><span class="text-red-500">*</span>Midline correction:</span>
          <div class="flex flex-col gap-2">
            <MyRadioButton v-model="patient?.center_correct" :options="centerCorrectionOptions"/>
            <div v-if="patient?.center_correct.includes('改善') ">
              <MyRadioButton v-model="patient?.center_correct" :options="centerCorrectionImproveOptions"/>
            </div>
          </div>
        </div>

        <div class="flex flex-row items-center">
          <span class="title"><span class="text-red-500">*</span>Molar Relationship (left):</span>
          <div class="flex flex-col gap-2">
            <MyRadioButton v-model="leftStatus" :options="jiuzhengguanxiOptions" @change="updateAdjust()"/>
            <Select v-if="leftStatus==='调整'" v-model="leftAdjust" :options="jiuzhengguanxiAdjustOptions"
                    optionLabel="label" optionValue="value"
                    class="w-full md:w-56" @change="updateAdjust()"/>
          </div>
        </div>
        <div class="flex flex-row items-center">
          <span class="title"><span class="text-red-500">*</span>Molar Relationship (right):</span>
          <div class="flex flex-col gap-2">
            <MyRadioButton v-model="rightStatus" :options="jiuzhengguanxiOptions" @change="updateAdjust()"/>
            <Select v-if="rightStatus==='调整'" v-model="rightAdjust" :options="jiuzhengguanxiAdjustOptions"
                    optionLabel="label" optionValue="value"
                    class="w-full md:w-56" @change="updateAdjust()"/>
          </div>
        </div>
        <div class="flex flex-row items-center">
          <span class="title">Expand arch:</span>
          <MyRadioButton v-model="patient?.kuogong" :options="kuogongOptions"/>
        </div>
        <div class="flex flex-row items-center">
          <span class="title">Vertical orientation of upper anterior teeth:</span>
          <MyRadioButton v-model="patient?.back_vertical" :options="verticalOptions"/>
        </div>

        <div class="flex flex-row items-center">
          <span class="title">Vertical orientation of upper posterior teeth:</span>
          <MyRadioButton v-model="patient?.front_vertical" :options="verticalOptions"/>
        </div>
        <div class="flex flex-row items-center">
          <span class="title"><span class="text-red-500">*</span>Interdental space:</span>
          <MyRadioButton v-model="patient?.close_correct" :options="closeCorrectOptions"/>
        </div>
        <div class="flex flex-row items-center">
          <span class="title">stripping of enamel:</span>
          <MyRadioButton v-model="patient?.quyou" :options="quyouOptions"/>
        </div>
      </div>
    </Panel>
  </div>
</template>

<style scoped>
.title {
  @apply w-32 text-right mr-4
}

</style>
