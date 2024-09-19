<script setup lang="ts">
import {useRouter} from "vue-router";
import ModelViewer from "../components/ModelViewer.vue";
import ModelViewerIframe from "@/components/ModelViewerIframe.vue";
import {onMounted} from "vue";
import authRequest from "@/service/authRequest.js";
import API from "@/assets/API.js";
import {ref} from "vue";

const router = useRouter();
const goBack = () => {
  router.back();
}
const case_no = router.currentRoute.value.params.case_no
const planId = router.currentRoute.value.params.planId
const url = ref("");
onMounted(async () => {
  const {data} = await authRequest.get(API.PLAN_URL + `?case_no=${case_no}`)
  console.log('data', data.data)
  if (data.data) {
    const cases = data.data;
    console.log('cases', cases)
    const c = cases.find(p => p.planId == planId)
    console.log('c', c)
    if (c) {
      url.value = c.detailUrl
    }
  }
})
</script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-row items-center mt-6 mr-6">
      <i class="pi pi-file-check text-primary m-4" style="font-size: 1.5rem"></i>
      <span class="text-2xl font-bold text-left grow text-primary">Solution Details</span>
      <Button label="Back" class="mr-4" icon="pi pi-chevron-left" severity="secondary" @click="goBack"/>
    </div>
    <ModelViewerIframe :url="url" :case_no="case_no"/>
  </div>
</template>

<style scoped>

</style>
