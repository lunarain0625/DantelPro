<script setup lang="ts">
import {useRouter} from "vue-router";
import ModelViewer from "../components/ModelViewer.vue";

const router = useRouter();
const goBack = () => {
  router.back();
}
const solution = {
  "case_no": "SH20220111",
  "planId": "PT17231",
  "planName": "矫治方案1",
  "createTime": "2024-07-23 17:39:48",
  "createBy": "普特",
  "planVersion": 1,
  "planStatus": "待确认",
  "pdf": "",
  "stl_up": "https://alphacdn.protectmec.com/uploads/2020/12/1ff1d20201218150625192619.stl",
  "stl_down": "https://alphacdn.protectmec.com/uploads/2020/12/1ff1d20201218150625197979.stl",
  "moimages": "https://alphacdn.protectmec.com/uploads/20200716/lgq9rkk_UZyA_vAv3DDNVIn5vSFl.gif",
  "touimage": "",
  "desc": "1111"
}
</script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-row items-center mt-6 mr-6">
      <i class="pi pi-file-check text-primary m-4" style="font-size: 1.5rem"></i>
      <span class="text-2xl font-bold text-left grow text-primary">Solution Details</span>
      <Button label="Back" class="mr-4" icon="pi pi-chevron-left" severity="secondary" @click="goBack"/>
    </div>
    <ModelViewer :solution="solution"/>
  </div>
</template>

<style scoped>

</style>
