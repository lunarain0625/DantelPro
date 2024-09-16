<script setup lang="ts">
import PatientTable from "../components/PatientTable.vue";
import CaseFilter from "../components/CaseFilter.vue";
import {onMounted} from "vue";
import authRequest from "../service/authRequest.js";
import API from "../assets/API.js";
import {useToast} from "primevue/usetoast";
import {ref} from "vue";

const cases = ref([]);
onMounted(
    async () => {
      const res = await authRequest.get(API.CASE_LIST)
      cases.value = res.data
      console.log('cases', cases.value)
    }
)
const toast = useToast();
const onDeletePatient = (event: any) => {
  console.log('deletePatient', event)
  //todo: delete API
  cases.value = cases.value.filter(p => p.case_no !== event.case_no)
  toast.add({severity: 'success', summary: 'Confirmed', detail: 'Record deleted', life: 3000});
}

const onRefresh = async () => {
  console.log('refresh');
  cases.value = [];
  const res = await authRequest.get(API.CASE_LIST)
  cases.value = res.data
  console.log('cases', cases.value)
}

</script>

<template>
  <div class="flex flex-col p-4">
    <Toast/>
    <CaseFilter/>
    <PatientTable :cases="cases" @onDeletePatient="onDeletePatient" @onRefresh="onRefresh"/>
  </div>
</template>

<style scoped>

</style>
