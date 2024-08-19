<script setup lang="ts">
const props = defineProps({
  src: String,
  title: String
})
const defaultSrc = "/src/assets/img_placeholder.png"
</script>

<template>
  <div class="w-32">
    <div class="box-border h-33 w-33 border-2 border-slate-200 rounded border-dashed flex items-center justify-center">
      <Image alt="Image" preview>
        <template #image>
          <img :src="props.src??defaultSrc" alt="image" class="h-32 w-32 object-cover object-center"/>
        </template>
        <template #preview="slotProps">
          <img :src="props.src??defaultSrc" alt="preview" :style="slotProps.style" @click="slotProps.onClick"/>
        </template>
      </Image>

    </div>

    <span>{{ props.title ?? "-" }}</span>
  </div>
</template>

<style scoped>

</style>