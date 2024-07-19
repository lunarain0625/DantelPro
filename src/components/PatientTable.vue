<script setup>
import {ref, onMounted} from 'vue';
import {ProductService} from '@/service/ProductService';
import {caseListData} from "@/service/caseList";
import {useConfirm} from "primevue/useconfirm";
import {useToast} from "primevue/usetoast";

onMounted(() => {
  caseListData.getPatients().then((data) => {
        console.log('data', data);
        patients.value = data.list
        console.log('patients', patients.value)
      }
  );
});

const patients = ref();

const getStatus = (patient) => {
  return [
    {status: 'Case Reviewed', icon: 'pi pi-calendar', color: patient.case_status === 1 ? 'green' : 'grey'},
    {status: 'Model Reviewed', icon: 'pi pi-check', color: patient.model_status === 1 ? 'green' : 'grey'},
    {status: 'Plan Reviewed', icon: 'pi pi-check', color: patient.plan_status === 2 ? 'green' : 'grey'},
    {status: 'Product Made', icon: 'pi pi-check', color: patient.make_status === 4 ? 'green' : 'grey'},
    {status: 'Product Delivered', icon: 'pi pi-check', color: patient.exp_status === 2 ? 'green' : 'grey'},
  ]
}

const deletePatient = (patient) => {
  console.log('deletePatient', patient)
}

// const confirm = useConfirm();
// const toast = useToast();
// const confirm2 = () => {
//   confirm.require({
//     message: 'Do you want to delete this record?',
//     header: 'Danger Zone',
//     icon: 'pi pi-info-circle',
//     rejectLabel: 'Cancel',
//     rejectProps: {
//       label: 'Cancel',
//       severity: 'secondary',
//       outlined: true
//     },
//     acceptProps: {
//       label: 'Delete',
//       severity: 'danger'
//     },
//     accept: () => {
//       toast.add({severity: 'info', summary: 'Confirmed', detail: 'Record deleted', life: 3000});
//     },
//     reject: () => {
//       toast.add({severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000});
//     }
//   });
// };

</script>

<template>
  <div class="card">
    <DataTable :value="patients" tableStyle="min-width: 50rem">
      <template #header>
        <div class="flex flex-wrap items-center justify-between gap-2">
          <span class="text-xl font-bold">Patients</span>
          <Button icon="pi pi-refresh" rounded raised/>
        </div>
      </template>
      <Column header="Patient Name">

        <template #body="slotProps">
          <div class="flex flex-col items-center">
            <Avatar
                :image="slotProps.data.top_face_image || 'https://alphacdn.protectmec.com/assets/img/avatar.png'"
                class="" size="xlarge" shape="circle"/>
            <span>{{ slotProps.data.patient_name }}</span>
          </div>
        </template>
      </Column>
      <Column field="case_no" header="ID"></Column>
      <Column field="createtime" header="Created On">
        <template #body="slotProps">
          {{ new Date(slotProps.data.createtime * 1000).toLocaleDateString() }}
        </template>
      </Column>

      <Column field="name" header="Name of the clinic	"></Column>
      <Column field="doctor" header="Affiliated Doctor"></Column>
      <Column header="Status">
        <template #body="slotProps">
          <template v-for="status in getStatus(slotProps.data)" :key="status.status">
            <Avatar :icon="status.icon" class="mr-2" shape="circle"
                    v-tooltip="status.status"
                    :style="`background-color: ${status.color}; color: white`"/>
          </template>
        </template>
      </Column>
      <Column header="Action">
        <template #body="slotProps">
          <Button icon="pi pi-trash" severity="danger" text rounded aria-label="Delete"
                  @click="deletePatient(slotProps.data)"/>
        </template>
      </Column>
      <template #footer> In total there are {{ patients ? patients.length : 0 }} patients.</template>
    </DataTable>
  </div>
</template>

