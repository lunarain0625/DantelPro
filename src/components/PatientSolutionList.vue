<script setup lang="ts">
import {solutionStatusMap} from "../assets/CONSTANT.js";
import json from "../service/exp_casefanganlist.json";
import {ref} from "vue";
import {useRouter} from "vue-router";

const solutions = ref(json.data);
const router = useRouter();
const openSolution = (solution: any) => {
  router.push("/model")
}
</script>

<template>
  <div v-for="(solution, index) in solutions" :key="solution.id">
    <div class="flex flex-row rounded-lg p-4 border-2 m-4">
      <div class="flex flex-col grow">
        <span class="text-left text-primary font-bold text-2xl">{{ solution.planName }}</span>
        <span class="text-left ">上传时间： {{ solution.createTime }}</span>
      </div>
      <!--      <Button :label="solutionStatusMap[solution.status].title"-->
      <!--              :severity="solutionStatusMap[solution.status].severity"-->
      <!--              @click="openSolution(solution.id)"-->
      <!--      />-->
      <Button :label="solution.planStatus"
              @click="openSolution(solution)"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
