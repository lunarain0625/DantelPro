<script setup lang="ts">

import PatientTable from "../components/PatientTable.vue";
import CaseFilter from "../components/CaseFilter.vue";
</script>

<template>
  <div class="flex flex-col p-4">
    <CaseFilter/>
    <PatientTable/>
  </div>
</template>

<style scoped>

</style>
