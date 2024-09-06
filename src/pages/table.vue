<script setup lang="ts">
import PatientTable from "../components/PatientTable.vue";
import CaseFilter from "../components/CaseFilter.vue";
import {onMounted} from "vue";
import authRequest from "../service/authRequest.js";
import API from "../assets/API.js";
import {caseListData} from "../service/caseList";
import {useToast} from "primevue/usetoast";

const cases = ref([]);
onMounted(
    async () => {
      //todo: delete fake data
      const fakeCases = caseListData.getCaseListData();
      cases.value = cases.value.concat(fakeCases.list);
      const res = await authRequest.get(API.CASE_LIST)
      cases.value = cases.value.concat(res.data);
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

</script>

<template>
  <div class="flex flex-col p-4">
    <Toast/>
    <CaseFilter/>
    <PatientTable :cases="cases" @onDeletePatient="onDeletePatient"/>
  </div>
</template>

<style scoped>

</style>
