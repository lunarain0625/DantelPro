<script setup lang="ts">
import json from "../../service/exp_patient.json";
import {ref} from "vue";
import UploadImageCell from "../Elements/UploadImageCell.vue";
import UploadFileCell from "../Elements/UploadFileCell.vue";
import {faceImageItems, oralImageItems, xrayImageItems} from "@/assets/CONSTANT.js";

const patient = ref(json.data);
const onImageChange = (event) => {
  patient.value[event.name] = event.url
}

</script>

<template>
  <div class="flex flex-col gap-4">
    <Fieldset legend="Face Photos">
      <div class="flex flex-wrap gap-4 mb-4">
        <template v-for="item in faceImageItems">
          <UploadImageCell :src="patient[item.key]" :name="item.key" :title="item.title"
                           @onImageChange="onImageChange"/>
        </template>
      </div>
    </Fieldset>

    <Fieldset legend="Oral Photos">
      <div class="flex flex-wrap gap-4 mb-4">
        <template v-for="item in oralImageItems">
          <UploadImageCell :src="patient[item.key]" :name="item.key" :title="item.title"
                           @onImageChange="onImageChange"/>
        </template>
      </div>
    </Fieldset>

    <Fieldset legend="X-ray Films">
      <div class="flex flex-wrap gap-4 mb-4">
        <template v-for="item in xrayImageItems">
          <UploadImageCell :src="patient[item.key]" :name="item.key" :title="item.title"
                           @onImageChange="onImageChange"/>
        </template>
      </div>
    </Fieldset>

    <Fieldset legend="Oral Scan Files">
      <div class="flex flex-wrap gap-4 mb-4">
        <UploadFileCell :src="patient.stl_up" name="stl_up" title="Maxillary model" @onImageChange="onImageChange"/>
        <UploadFileCell :src="patient.stl_down" name="stl_down" title="Mandibular model"
                        @onImageChange="onImageChange"/>
        <UploadFileCell :src="patient.stl_all" name="stl_all" title="Bite model" @onImageChange="onImageChange"/>
      </div>
    </Fieldset>

  </div>
</template>

<style scoped>

</style>
