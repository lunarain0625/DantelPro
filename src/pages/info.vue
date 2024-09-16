<script setup lang="ts">
import {designItems, NEW_PATIENT, patientItems} from "../assets/CONSTANT.js";
import CaseLogView from "../components/CaseLogView.vue";
import PatientSolutionList from "../components/PatientSolutionList.vue";
import PatientModelView from "../components/PatientModelView.vue";
import {onMounted, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import authRequest from "../service/authRequest.js";
import API from "../assets/API.js";

const router = useRouter()
const route = useRoute()
const goBack = () => {
  console.log('goBack')
  router.back();
}
const tabValue = ref('info');
const patient = ref(NEW_PATIENT);

onMounted(async () => {
  console.log('onMounted', route.params.case_no)
  const res = await authRequest.get(API.CASE_INFO + `?case_no=${route.params.case_no}`);
  patient.value = res.data;
  console.log('res patient', patient.value)
})

</script>

<template>
  <div class="flex flex-row">
    <Tabs v-model:value="tabValue" class="grow">
      <div class="flex items-center flex-row">
        <Button label="Back" class="mr-4" icon="pi pi-chevron-left" severity="secondary" @click="goBack"/>
        <span class="text-2xl font-bold ml-4 mr-12">Case Details</span>
        <TabList class="grow">
          <Tab value="info">Case Information</Tab>
          <Tab value="plan">Corrective Treatment Plan</Tab>
          <Tab value="record">Follow Up Records</Tab>
          <!--          <Tab value="supply">Bracket Replenishment</Tab>-->
        </TabList>
      </div>
      <TabPanels>
        <TabPanel value="info">
          <PatientBasicInfoView :patient="patient"/>
          <PaitentAdvanceInfoView :patient="patient" :items="patientItems" icon="pi pi-user"
                                  title="Patient Information"/>
          <PaitentAdvanceInfoView :patient="patient" :items="designItems" icon="pi pi-pencil"
                                  title="Design Information"/>
          <PatientImageView :patient="patient"/>
          <PatientModelView :patient="patient"/>
        </TabPanel>
        <TabPanel value="plan">
          <PatientSolutionList :patient="patient"/>
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
