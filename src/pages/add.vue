<script setup lang="ts">
import BasicInfoView from "../components/CreateCase/BasicInfoView.vue";
import ImageInfoView from "../components/CreateCase/ImageInfoView.vue";
import DesignInfoView from "../components/CreateCase/DesignInfoView.vue";
import {designItems, NEW_PATIENT, patientItems} from "../assets/CONSTANT.js";
import PatientModelView from "../components/PatientModelView.vue";
import {ref} from 'vue';
import {useToast} from "primevue/usetoast";
import {validatePatientByStep} from "../service/Validator.js";
import authRequest from "../service/authRequest.js";
import API from "../assets/API.js";
import {useRouter} from "vue-router";
import ToothSeat from "../components/Elements/ToothSeat.vue";

const router = useRouter();
const toast = useToast();
const newPatient = ref(NEW_PATIENT)

const onSubmit = async () => {
  newPatient.value.no = String(Math.floor(Date.now() / 1000))
  console.log('newPatient', newPatient.value)
  const res = await authRequest.post(API.CREATE_CASE, newPatient.value)
  console.log('res', res)
  if (res.code == 1) {
    toast.add({severity: 'success', summary: 'Success Message', detail: 'Add new patient successfully', life: 3000});
    router.push(`info/${res.data}`)
  } else {
    toast.add({severity: 'error', summary: 'Error Message', detail: res.msg, life: 3000});
  }
}


</script>

<template>
  <div class="card">
    <Toast/>
    <ToothSeat/>
    <Stepper value="1" class="basis-[50rem]" linear>
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
          <BasicInfoView :patient="newPatient"/>
          <div class="flex pt-6 justify-end">
            <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="()=>{
              if (validatePatientByStep('2', newPatient, toast)) {
                activateCallback('2')
              }
              }"/>
          </div>
        </StepPanel>
        <StepPanel v-slot="{ activateCallback }" value="2">
          <DesignInfoView :patient="newPatient"/>
          <div class="flex pt-6 justify-between">
            <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="activateCallback('1')"/>
            <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="()=>{
              if (validatePatientByStep('3', newPatient, toast)) {
                activateCallback('3')
              }
              }"/>
          </div>
        </StepPanel>
        <StepPanel v-slot="{ activateCallback }" value="3">
          <ImageInfoView :patient="newPatient"/>
          <div class="flex pt-6 justify-between">
            <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="activateCallback('2')"/>
            <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="()=>{
              if (validatePatientByStep('4', newPatient, toast)) {
                activateCallback('4')
              }
              }"/>
          </div>
        </StepPanel>

        <StepPanel v-slot="{ activateCallback }" value="4">
          <PatientBasicInfoView :patient="newPatient"/>
          <PaitentAdvanceInfoView :patient="newPatient" :items="patientItems" icon="pi pi-user"
                                  title="Basic Information"/>
          <PaitentAdvanceInfoView :patient="newPatient" :items="designItems" icon="pi pi-pencil"
                                  title="Design Information"/>
          <PatientImageView :patient="newPatient.images"/>
          <PatientModelView :patient="newPatient"/>
          <div class="flex pt-6 justify-between">
            <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="activateCallback('3')"/>
            <Button label="Submit" icon="pi pi-arrow-right" iconPos="right" @click="onSubmit"/>
          </div>
        </StepPanel>
      </StepPanels>
    </Stepper>
  </div>


</template>

<style scoped>

</style>
