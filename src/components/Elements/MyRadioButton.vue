<script setup lang="ts">

const model = defineModel({default: ""})
const props = defineProps({
  options: Array,
})
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <div v-for="option in options" :key="option.value" class="flex items-center">
      <RadioButton v-model="model" :inputId="option.value" name="dynamic" :value="option.value"/>
      <label :for="option.value" class="ml-2">{{ option.label }}</label>
      <Tag v-if="option.desc" icon="pi pi-info-circle" severity="success" v-tooltip="option.desc??''"></Tag>
    </div>
  </div>
</template>

<style scoped>

</style>