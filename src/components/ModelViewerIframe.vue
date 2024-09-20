<script setup lang="ts">
import CardViewSkeleton from "../components/Elements/CardViewSkeleton.vue";
import {ref} from "vue";

const loaded = ref(false);
const iframeLoaded = (event: any) => {
  console.log('iframe loaded', event)
  loaded.value = true
}
const props = defineProps({
  url: String,
})

console.log('case_url', props.url)
</script>

<template>
  <CardViewSkeleton v-if="!loaded"/>
  <iframe
      v-show="loaded"
      @load="iframeLoaded"
      class="grow"
      :src="url"></iframe>
</template>
<style scoped>

</style>
