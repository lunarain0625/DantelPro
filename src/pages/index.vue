<script setup lang="ts">
import CaseFilter from "../components/CaseFilter.vue";
import PatientTable from "../components/PatientTable.vue";
</script>

<template>
  <CaseFilter/>
  <PatientTable/>
  <!--  doctor avatar-->
  <div>
    <Avatar image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" size="xlarge"
            shape="circle"/>
    <label for="username" class="block text-900 font-medium mb-2">username</label>
    <Tag severity="contrast" value="Contrast" rounded></Tag>
  </div>
</template>

<style lang="css" scoped>
.root {
  width: 100vw;
  height: 100vh;
  background-color: #535bf2;
}
</style>