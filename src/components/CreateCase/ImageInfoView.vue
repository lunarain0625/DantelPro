<script setup lang="ts">
import json from "../../service/exp_patient.json";
import {ref} from "vue";
import UploadImageCell from "../Elements/UploadImageCell.vue";
import UploadFileCell from "../Elements/UploadFileCell.vue";

const patient = ref(json.data);
const onImageChange = (event) => {
  patient.value[event.name] = event.url
}

</script>

<template>
  <div class="flex flex-col gap-4">
    <span>Image Info</span>
    <Fieldset legend="脸面照片">
      <div class="flex flex-wrap gap-4 mb-4">
        <UploadImageCell :src="patient.top_face_image" name="top_face_image" title="正面像"
                         @onImageChange="onImageChange"/>
        <UploadImageCell :src="patient.left_face_image" name="left_face_image" title="外左侧像" @onImageChange="onImageChange"/>
        <UploadImageCell :src="patient.right_face_image" name="right_face_image" title="外右侧像" @onImageChange="onImageChange"/>
        <UploadImageCell :src="patient.smile_image" name="smile_image" title="微笑照" @onImageChange="onImageChange"/>
        <UploadImageCell :src="patient.left_half_image" name="left_half_image" title="左3/4侧面像" @onImageChange="onImageChange"/>
        <UploadImageCell :src="patient.right_half_image" name="right_half_image" title="右3/4侧面像" @onImageChange="onImageChange"/>
      </div>
    </Fieldset>

    <Fieldset legend="口内照片">
      <div class="flex flex-wrap gap-4 mb-4">
        <UploadImageCell :src="patient.top_mouth_image" name="top_mouth_image" title="上颌照" @onImageChange="onImageChange"/>
        <UploadImageCell :src="patient.bottom_mouth_image" name="bottom_mouth_image" title="下颌照" @onImageChange="onImageChange"/>
        <UploadImageCell :src="patient.left_mouth_image" name="left_mouth_image" title="口内左侧照" @onImageChange="onImageChange"/>
        <UploadImageCell :src="patient.right_mouth_image" name="right_mouth_image" title="口内右侧照" @onImageChange="onImageChange"/>
        <UploadImageCell :src="patient.middle_mouth_image" name="middle_mouth_image" title="口内正面照" @onImageChange="onImageChange"/>
      </div>
    </Fieldset>

    <Fieldset legend="X光片">
      <div class="flex flex-wrap gap-4 mb-4">
        <UploadImageCell :src="patient.x_all_image" name="x_all_image" title="全景片" @onImageChange="onImageChange"/>
        <UploadImageCell :src="patient.x_side_image" name="x_side_image" title="侧位片" @onImageChange="onImageChange"/>
      </div>
    </Fieldset>

    <Fieldset legend="口内扫描档">
      <div class="flex flex-wrap gap-4 mb-4">
        <UploadFileCell :src="patient.stl_up" name="stl_up" title="上颌模型" @onImageChange="onImageChange"/>
        <UploadFileCell :src="patient.stl_down" name="stl_down" title="下颌模型" @onImageChange="onImageChange"/>
        <UploadFileCell :src="patient.stl_all" name="stl_all" title="咬颌模型" @onImageChange="onImageChange"/>
      </div>
    </Fieldset>

  </div>
</template>

<style scoped>

</style>