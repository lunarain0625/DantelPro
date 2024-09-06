<script setup lang="ts">
import {ref} from "vue";
import json from "../service/exp_caselog.json";
import {caseLogItems} from "../assets/CONSTANT.js";
import LogCell from "./LogCell.vue";

const cases = ref(json.data);

</script>

<template>
  <div class=" flex flex-col p-4 h-full">
    <span class="text-xl font-bold">Case tracking</span>
    <Divider />
    <div v-for="item in caseLogItems" :key="item.key">
      <div v-if="cases[item.key]&&cases[item.key].length">
        <div class="flex items-center">
          <i class="text-primary m-4" :class="item.icon" style="font-size: 1.5rem"></i>
          <span class="text-primary font-bold">{{ item.title }}</span>
        </div>
        <LogCell :events="cases[item.key]"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
