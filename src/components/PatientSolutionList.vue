<script setup lang="ts">
import {useRouter} from "vue-router";

const props = defineProps({
  patient: Object,
  solutions: Array<{ planId: string, planName: string, createTime: string, planStatus: string }>
})

const router = useRouter();
const openSolution = (solution: any) => {
  router.push(`/model/${solution.case_no}/${solution.planId}`)
}
</script>

<template>
  <div v-if="solutions?.length == 0">
    <span class="font-bold text-2xl">No Plan Yet</span>
  </div>
  <div v-else v-for="(solution) in solutions" :key="solution?.planId">
    <div class="flex flex-row rounded-lg p-4 border-2 m-4">
      <div class="flex flex-col grow">
        <span class="text-left text-primary font-bold text-2xl">{{ solution?.planName }}</span>
        <span class="text-left ">上传时间： {{ solution?.createTime }}</span>
      </div>
      <!--      <Button :label="solutionStatusMap[solution.status].title"-->
      <!--              :severity="solutionStatusMap[solution.status].severity"-->
      <!--              @click="openSolution(solution.id)"-->
      <!--      />-->
      <Button :label="solution?.planStatus"
              @click="openSolution(solution)"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
