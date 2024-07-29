<script setup lang="ts">

import {designItems, patientItems} from "../assets/CONSTANT.js";
import CaseLogView from "../components/CaseLogView.vue";

const goBack = () => {
  console.log('goBack')
}
const tabValue = ref('info');

</script>

<template>
  <div class="flex flex-row">
    <Tabs v-model:value="tabValue">
      <div class="flex items-center flex-row">
        <span class="text-2xl font-bold ml-4 mr-12">病例详情</span>
        <TabList class="grow">
          <Tab value="info">病例信息</Tab>
          <Tab value="plan">矫治方案</Tab>
          <Tab value="record">复诊记录</Tab>
          <Tab value="supply">补托槽</Tab>
        </TabList>
        <Button label="Back" class="mr-4" icon="pi pi-chevron-left" severity="secondary" @click="goBack"/>
      </div>
      <TabPanels>
        <TabPanel value="info">
          <PatientBasicInfoView/>
          <PaitentAdvanceInfoView :items="patientItems" icon="pi pi-user" title="基本信息"/>
          <PaitentAdvanceInfoView :items="designItems" icon="pi pi-pencil" title="设计信息"/>
          <PatientImageView/>
        </TabPanel>
        <TabPanel value="plan">

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