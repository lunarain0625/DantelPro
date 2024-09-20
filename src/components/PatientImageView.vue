<script setup lang="ts">
import {ref} from "vue";
import {faceImageItems, oralImageItems, xrayImageItems} from "../assets/CONSTANT.js";
import ImageCell from "./Elements/ImageCell.vue";

const props = defineProps({
  patient: Object
})
const tabs = ref([
  {title: 'Face Photos', value: 'face', items: faceImageItems},
  {title: 'Oral Photos', value: 'oral', items: oralImageItems},
  {title: 'X-ray Films', value: 'xray', items: xrayImageItems},
])
</script>

<template>
  <div class="flex items-center">
    <i class="pi pi-camera text-primary m-4" style="font-size: 1.5rem"></i>
    <span class="font-bold text-2xl text-primary">Photo Information</span>
  </div>

  <Tabs value="face">
    <TabList>
      <Tab v-for="tab in tabs" :key="tab.title" :value="tab.value">{{ tab.title }}</Tab>
    </TabList>
    <TabPanels>
      <TabPanel v-for="tab in tabs" :key="tab.value" :value="tab.value">
        <div class="flex flex-wrap flex-row">
          <div v-for="item in tab.items" :key="item?.key">
            <div v-if="patient?.[item?.key]" class="p-2">
              <ImageCell :src="patient[item?.key]" :title="item?.title"/>
            </div>
          </div>
        </div>
      </TabPanel>
    </TabPanels>
  </Tabs>

</template>

<style scoped>

</style>
