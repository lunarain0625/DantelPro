<script setup lang="ts">
import PatientBasicInfoView from "../components/PatientBasicInfoView.vue";
import PaitentAdvanceInfoView from "../components/PaitentAdvanceInfoView.vue";
import {patientItems} from "../assets/CONSTANT.js";
import {designItems} from "../assets/CONSTANT.js";
import ImageCell from "../components/ImageCell.vue";
import PatientImageView from "../components/PatientImageView.vue";
import LogCell from "../components/LogCell.vue";
import CaseLogView from "../components/CaseLogView.vue";
import Info from "./info.vue";
</script>

<template>
  <div class="h-screen">
    <info/>
  </div>
</template>

<style lang="css" scoped>

</style>