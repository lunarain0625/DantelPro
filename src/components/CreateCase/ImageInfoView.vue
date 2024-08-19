<script setup lang="ts">
import json from "../../service/exp_patient.json";
import {ref} from "vue";
import UploadImageCell from "../Elements/UploadImageCell.vue";

const patient = ref(json.data);
</script>

<template>
  <div>
    <span>Image Info</span>
    <div class="flex flex-wrap gap-4">
      <UploadImageCell :src="patient.top_face_image" name="top_face_image" title="正面像"/>
      <UploadImageCell :src="patient.left_face_image" name="left_face_image" title="外左侧像"/>
      <UploadImageCell :src="patient.right_face_image" name="right_face_image" title="外右侧像"/>
      <UploadImageCell :src="patient.smile_image" name="smile_image" title="微笑照"/>
      <UploadImageCell :src="patient.left_half_image" name="left_half_image" title="左3/4侧面像"/>
      <UploadImageCell :src="patient.right_half_image" name="right_half_image" title="右3/4侧面像"/>
    </div>

    <div class="flex flex-wrap ">
      <UploadImageCell :src="patient.top_mouth_image" name="top_mouth_image" title="上颌照"/>
      <UploadImageCell :src="patient.bottom_mouth_image" name="bottom_mouth_image" title="下颌照"/>
      <UploadImageCell :src="patient.left_mouth_image" name="left_mouth_image" title="口内左侧照"/>
      <UploadImageCell :src="patient.right_mouth_image" name="right_mouth_image" title="口内右侧照"/>
      <UploadImageCell :src="patient.middle_mouth_image" name="middle_mouth_image" title="口内正面照"/>
    </div>

    <div class="flex flex-wrap ">
      <UploadImageCell :src="patient.x_all_image" name="x_all_image" title="全景片"/>
      <UploadImageCell :src="patient.x_side_image" name="x_side_image" title="侧位片"/>
    </div>

  </div>
</template>

<style scoped>

</style>