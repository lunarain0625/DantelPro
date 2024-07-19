<script setup lang="ts">

const dates = ref();
const institution = ref("");
const patientKeyword = ref("");
const institutions = ref([
  {name: 'New York', code: 'NY'},
  {name: 'Rome', code: 'RM'},
  {name: 'London', code: 'LDN'},
  {name: 'Istanbul', code: 'IST'},
  {name: 'Paris', code: 'PRS'}
]);

const gender = ref({name: 'All', value: null});
const genderOptions = ref([
  {name: 'All', value: null},
  {name: 'Male', value: 'Male'},
  {name: 'Female', value: 'Female'}]);

const age = ref({name: 'All', value: null});
const ageOptions = ref([
  {name: 'All', value: null},
  {name: 'Under 10', value: '0,9'},
  {name: '10-20 years old', value: '10,20'},
  {name: '21-30 years old', value: '21,30'},
  {name: '31-40 years old', value: '31,40'},
  {name: 'Over 41 years old', value: '40,200'}]);

const anshi = ref({name: 'All', value: null});
const anshiOptions = ref([
  {name: 'All', value: null},
  {name: 'unknown', value: 'unknown'},
  {name: 'Angle Class I', value: 'Angle Class I'},
  {name: 'Angle Class II', value: 'Angle Class II'},
  {name: 'Angle Class III', value: 'Angle Class III'},
])

const guxing = ref({name: 'All', value: null});
const guxingOptions = ref([
  {name: 'All', value: null},
  {name: 'unknown', value: 'unknown'},
  {name: 'Skeletal Class I', value: 'Skeletal Class I'},
  {name: 'Skeletal Class II', value: 'Skeletal Class II'},
  {name: 'Skeletal Class III', value: 'Skeletal Class III'},
])

const gaodi = ref({name: 'All', value: null});
const gaodiOptions = ref([
  {name: 'All', value: null},
  {name: 'unknown', value: 'unknown'},
  {name: 'high angle', value: 'high angle'},
  {name: 'low angle', value: 'low angle'},
  {name: 'equal angle', value: 'equal angle'},
])

</script>

<template>
  <div class="flex justify-start gap-2 mb-2">
    <DatePicker v-model="dates" selectionMode="range" :manualInput="false" showIcon showButtonBar
                placeholder="Select the date"
                icon="pi pi-calendar"/>
    <Select v-model="institution" :options="institutions" optionLabel="name" placeholder="Select the institution"
            class="w-full md:w-56"/>
    <InputText type="text" v-model="patientKeyword" placeholder="Patient Name/ID"/>
    <Button label="Search" icon="pi pi-search"/>
  </div>
  <div class="flex gap-2">
    <div class="flex flex-col items-start justify-around">
      <span class="text-primary font-bold">Gender</span>
      <span class="text-primary font-bold">Age</span>
      <span class="text-primary font-bold">Angle classification</span>
      <span class="text-primary font-bold">Bone classification</span>
      <span class="text-primary font-bold">FMA</span>
    </div>
    <div class="flex flex-col items-start gap-2">
      <SelectButton v-model="gender" :options="genderOptions" optionLabel="name" aria-labelledby="basic"/>
      <SelectButton v-model="age" :options="ageOptions" optionLabel="name" aria-labelledby="basic"/>
      <SelectButton v-model="anshi" :options="anshiOptions" optionLabel="name" aria-labelledby="basic"/>
      <SelectButton v-model="guxing" :options="guxingOptions" optionLabel="name" aria-labelledby="basic"/>
      <SelectButton v-model="gaodi" :options="gaodiOptions" optionLabel="name" aria-labelledby="basic"/>
    </div>
  </div>

</template>

<style scoped>

</style>