<script setup>
import {ref, onMounted} from 'vue';
import {caseListData} from "@/service/caseList";
import {useConfirm} from "primevue/useconfirm";
import {useToast} from "primevue/usetoast";

const props = defineProps({
  cases: Array,
})

const confirm = useConfirm();
const toast = useToast();
const router = useRouter();
const nextPage = ref(0);
const emit = defineEmits(['onDeletePatient']);
const getStatus = (patient) => {
  return [
    {status: 'Case Reviewed', icon: 'pi pi-calendar', color: patient.case_status === 1 ? '#3d8eaf' : 'grey'},
    {status: 'Model Reviewed', icon: 'pi pi-paperclip', color: patient.model_status === 1 ? '#3d8eaf' : 'grey'},
    {status: 'Plan Reviewed', icon: 'pi pi-file', color: patient.plan_status === 2 ? '#3d8eaf' : 'grey'},
    {status: 'Product Made', icon: 'pi pi-wrench', color: patient.make_status === 4 ? '#3d8eaf' : 'grey'},
    {status: 'Product Delivered', icon: 'pi pi-truck', color: patient.exp_status === 2 ? '#3d8eaf' : 'grey'},
  ]
}


const confirmDelete = (event, patient) => {
  confirm.require({
    target: event.currentTarget,
    message: 'Do you want to delete this record?',
    icon: 'pi pi-info-circle',
    rejectProps: {
      label: 'Cancel',
      severity: 'secondary',
      outlined: true
    },
    acceptProps: {
      label: 'Delete',
      severity: 'danger'
    },
    accept: () => {
      emit("onDeletePatient", patient)
    },
    reject: () => {
    }
  });
}

const viewInfo = (patient) => {
  router.push(`info/${patient.case_no}`)
}

</script>

<template>
  <div class="card">
    <DataTable :value="cases" tableStyle="min-width: 50rem">
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

      <!--      <Column field="name" header="Name of the clinic	"></Column>-->
      <!--      <Column field="doctor" header="Affiliated Doctor"></Column>-->
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
          <Toast/>
          <ConfirmPopup></ConfirmPopup>
          <Button icon="pi pi-eye" text rounded @click="viewInfo(slotProps.data)"/>
          <Button icon="pi pi-trash" severity="danger" text rounded aria-label="Delete"
                  @click="confirmDelete($event,slotProps.data)"/>

        </template>
      </Column>
      <template #footer>
        <div v-if="nextPage===0" class="flex flex-wrap justify-center">
          In total there are {{ patients ? patients.length : 0 }} patients.
        </div>
        <div v-else class="flex flex-wrap justify-center">
          <Button label="Load More" @click="caseListData.getPatients().then((data) => {
            patients = patients.concat(data.list)
            nextPage = data.next_page
          })"/>
        </div>
      </template>
    </DataTable>
  </div>
</template>

