<script setup lang="ts">
const props = defineProps({
  options: Array,
  modelValue: String,
})
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class=" flex flex-wrap gap-2">
    <div v-for="option in options">
      <Chip @click="emit('update:modelValue', option.value)" :value="option.value" :label="option.label"/>
    </div>
  </div>
</template>

<style scoped>

</style>