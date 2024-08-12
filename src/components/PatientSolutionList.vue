<script setup lang="ts">
import {solutionStatusMap} from "../assets/CONSTANT.js";
import json from "../service/exp_casefanganlist.json";

const solutions = ref(json.data);
</script>

<template>
  <div v-for="(solution, index) in solutions" :key="solution.id" class="my-4">
    <div class="flex flex-row bg-neutral-200 rounded-lg p-4 ">
      <div class="flex flex-col flex-1 ">
        <span class="text-left text-primary font-bold text-2xl">{{ solution.patient_name }}的矫治方案{{
            index + 1
          }}</span>
        <span class="text-left ">上传时间： {{ solution.createtime }}</span>
      </div>
      <Button :label="solutionStatusMap[solution.status].title"
              :severity="solutionStatusMap[solution.status].severity"/>
    </div>
  </div>
</template>

<style scoped>

</style>