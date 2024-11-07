<script setup lang="ts">
import UploadImageCell from "../Elements/UploadImageCell.vue";
import UploadFileCell from "../Elements/UploadFileCell.vue";
import {faceImageItems, oralImageItems, xrayImageItems} from "@/assets/CONSTANT.js";
import {NEW_PATIENT} from "../../assets/CONSTANT.js";

const props = defineProps({
  patient: {
    type: Object,
    default: NEW_PATIENT,
  }
})

const onImageChange = (event) => {
  props.patient!.images[event.name] = event.url
}

const onFileChange = (event) => {
  props.patient![event.name] = event.url
}

</script>

<template>
  <div class="flex flex-col gap-4">
    <Fieldset legend="Face Photos">
      <div class="flex flex-wrap gap-4 mb-4">
        <template v-for="item in faceImageItems">
          <UploadImageCell :src="patient!.images[item.key]" :name="item.key" :title="item.title"
                           @onImageChange="onImageChange"/>
        </template>
      </div>
    </Fieldset>

    <Fieldset legend="Oral Photos">
      <div class="flex flex-wrap gap-4 mb-4">
        <template v-for="item in oralImageItems">
          <UploadImageCell :src="patient!.images[item.key]" :name="item.key" :title="item.title"
                           @onImageChange="onImageChange"/>
        </template>
      </div>
    </Fieldset>

    <Fieldset legend="X-ray Films">
      <div class="flex flex-wrap gap-4 mb-4">
        <template v-for="item in xrayImageItems">
          <UploadImageCell :src="patient!.images[item.key]" :name="item.key" :title="item.title"
                           @onImageChange="onImageChange"/>
        </template>
      </div>
    </Fieldset>

    <Fieldset legend="Oral Scan Files">
      <div class="flex flex-wrap gap-4 mb-4">
        <UploadFileCell :src="patient!.stl_up" name="stl_up" title="Maxillary model" @onFileChange="onFileChange"/>
        <UploadFileCell :src="patient!.stl_down" name="stl_down" title="Mandibular model"
                        @onFileChange="onFileChange"/>
        <UploadFileCell :src="patient!.stl_all" name="stl_all" title="Bite model" @onFileChange="onFileChange"/>
      </div>
    </Fieldset>

  </div>
</template>

<style scoped>

</style>
