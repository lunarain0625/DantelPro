<script setup lang="ts">
import PatientTable from "../components/PatientTable.vue";
import CaseFilter from "../components/CaseFilter.vue";
import {onMounted, watch} from "vue";
import authRequest from "../service/authRequest.js";
import API from "../assets/API.js";
import {useToast} from "primevue/usetoast";
import {ref} from "vue";
import {useRoute} from 'vue-router'
import {STATUS_MAP} from "@/assets/CONSTANT.js";

const cases = ref([]);
const route = useRoute();
const hasMore = ref(true);
const params = {
  status: '',
  page: 1,
  limit: 20,
}
onMounted(
    async () => {
      await getCases()
    }
)

const getCases = async () => {
  const res = await authRequest.get(API.CASE_LIST, {params})
  cases.value = res.data.data
  console.log('cases', cases.value)
  const nextPageRes = await authRequest.get(API.CASE_LIST, {params: {...params, page: Number(params.page) + 1}})
  console.log('nextPageRes', nextPageRes)
  hasMore.value = nextPageRes.data.data.length > 0
}

watch(() => route.params.status, async (newState, oldState) => {
  const status = STATUS_MAP[newState]
  console.log('status', status)
  params.status = status
  await getCases()
})
const toast = useToast();
const onDeletePatient = (event: any) => {
  console.log('deletePatient', event)
  //todo: delete API
  // cases.value = cases.value.filter(p => p.case_no !== event.case_no)
  toast.add({severity: 'success', summary: 'Confirmed', detail: 'Record deleted', life: 3000});
}

const onRefresh = async () => {
  console.log('refresh');
  cases.value = [];
  const {data} = await authRequest.get(API.CASE_LIST)
  cases.value = data.data
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
