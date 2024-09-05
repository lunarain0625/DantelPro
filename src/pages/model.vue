<script setup lang="ts">

import PatientModelView from "@/components/ModelViewer.vue";
import {useRouter} from "vue-router";

const router = useRouter();
const goBack = () => {
  router.back();
}
</script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-row items-center mt-6 mr-6">
      <i class="pi pi-file-check text-primary m-4" style="font-size: 1.5rem"></i>
      <span class="text-2xl font-bold text-left grow text-primary">Solution Details</span>
      <Button label="Back" class="mr-4" icon="pi pi-chevron-left" severity="secondary" @click="goBack"/>
    </div>
    <PatientModelView/>
  </div>
</template>

<style scoped>

</style>
