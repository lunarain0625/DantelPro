<script setup lang="ts">

import {designItems, patientItems} from "../assets/CONSTANT.js";
import CaseLogView from "../components/CaseLogView.vue";
import PatientSolutionList from "../components/PatientSolutionList.vue";
import PatientModelView from "@/components/PatientModelView.vue";

const goBack = () => {
  console.log('goBack')
}
const tabValue = ref('info');

</script>

<template>
  <div class="flex flex-row">
    <Tabs v-model:value="tabValue" class="grow">
      <div class="flex items-center flex-row">
        <span class="text-2xl font-bold ml-4 mr-12">Case Details</span>
        <TabList class="grow">
          <Tab value="info">Case Information</Tab>
          <Tab value="plan">Corrective Treatment Plan</Tab>
          <Tab value="record">Follow Up Records</Tab>
          <!--          <Tab value="supply">Bracket Replenishment</Tab>-->
        </TabList>
        <Button label="Back" class="mr-4" icon="pi pi-chevron-left" severity="secondary" @click="goBack"/>
      </div>
      <TabPanels>
        <TabPanel value="info">
          <PatientBasicInfoView/>
          <PaitentAdvanceInfoView :items="patientItems" icon="pi pi-user" title="Basic Information"/>
          <PaitentAdvanceInfoView :items="designItems" icon="pi pi-pencil" title="Design Information"/>
          <PatientImageView/>
          <PatientModelView/>
        </TabPanel>
        <TabPanel value="plan">
          <PatientSolutionList/>
        </TabPanel>
        <TabPanel value="record">

        </TabPanel>
        <TabPanel value="supply">

        </TabPanel>
      </TabPanels>
    </Tabs>
    <div v-if="tabValue === 'info'">
      <CaseLogView/>
    </div>
  </div>
</template>

<style scoped>

</style>
