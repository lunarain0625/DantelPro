<script setup lang="ts">
import BasicInfoView from "../components/CreateCase/BasicInfoView.vue";
import ImageInfoView from "../components/CreateCase/ImageInfoView.vue";
import DesignInfoView from "../components/CreateCase/DesignInfoView.vue";
import {designItems, patientItems} from "../assets/CONSTANT.js";
import PatientModelView from "@/components/PatientModelView.vue";
</script>

<template>
  <div class="card">
    <Stepper value="1" class="basis-[50rem]">
      <div class="mb-12">
        <StepList>
          <Step value="1">Basic Information</Step>
          <Step value="2">Design Information</Step>
          <Step value="3">Photo & Model Information</Step>
          <Step value="4">Confirm Information</Step>
        </StepList>
      </div>
      <StepPanels>
        <StepPanel v-slot="{ activateCallback }" value="1">
          <BasicInfoView/>
          <div class="flex pt-6 justify-end">
            <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="activateCallback('2')"/>
          </div>
        </StepPanel>
        <StepPanel v-slot="{ activateCallback }" value="2">
          <DesignInfoView/>
          <div class="flex pt-6 justify-between">
            <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="activateCallback('1')"/>
            <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="activateCallback('3')"/>
          </div>
        </StepPanel>
        <StepPanel v-slot="{ activateCallback }" value="3">
          <ImageInfoView/>
          <div class="flex pt-6 justify-between">
            <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="activateCallback('2')"/>
            <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="activateCallback('4')"/>
          </div>
        </StepPanel>

        <StepPanel v-slot="{ activateCallback }" value="4">
          <PatientBasicInfoView/>
          <PaitentAdvanceInfoView :items="patientItems" icon="pi pi-user" title="Basic Information"/>
          <PaitentAdvanceInfoView :items="designItems" icon="pi pi-pencil" title="Design Information"/>
          <PatientImageView/>
          <PatientModelView/>
          <div class="flex pt-6 justify-between">
            <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="activateCallback('2')"/>
            <Button label="Submit" icon="pi pi-arrow-right" iconPos="right" @click="()=>console.log('sumbit')"/>
          </div>
        </StepPanel>
      </StepPanels>
    </Stepper>
  </div>


</template>

<style scoped>

</style>
