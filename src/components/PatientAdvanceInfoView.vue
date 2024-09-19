<script setup lang="ts">
const props = defineProps({
  items: [],
  title: String,
  icon: String,
  patient: Object
})
</script>

<template>
  <div class="flex items-center">
    <i class="text-primary m-4" :class="props.icon??'' " style="font-size: 1.5rem"></i>
    <span class="font-bold text-2xl text-primary">{{ props.title }}</span>
  </div>
  <div class="flex flex-wrap">
    <div v-for="item in props.items??[]" :key="item" class="w-1/2 p-4 min-w-fit">
      <div class="flex justify-start">
        <span class="text-base text-slate-500"> {{ item.title }}</span>
        <span class="text-base font-bold">{{ patient[item.key] }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>