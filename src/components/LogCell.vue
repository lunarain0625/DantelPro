<script setup lang="ts">
const props = defineProps({
  events: Array<{ msg: string, create_time: number}>,
})
</script>

<template>
  <Timeline :value="events">
    <template #opposite="slotProps">
      <small class="text-surface-500 dark:text-surface-400">
        {{ new Date(slotProps.item.create_time * 1000).toLocaleDateString() }}
        {{ new Date(slotProps.item.create_time * 1000).toLocaleTimeString() }}</small>
    </template>
    <template #content="slotProps">
      <div class="max-w-truncate min-w-40">{{ slotProps.item.msg }}</div>
    </template>
  </Timeline>
</template>

<style scoped>

</style>
