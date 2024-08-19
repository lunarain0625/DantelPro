<script setup lang="ts">
import {placeholderMap} from "../../assets/CONSTANT.js";
import {useToast} from "primevue/usetoast";
import {ref} from "vue";

const props = defineProps({
  src: String,
  title: String,
  name: String,
})
const toast = useToast();

const onUpload = async (event) => {
  const fileUp = event.files[0];
  const reader = new FileReader();
  const body = new FormData();
  body.append("image", fileUp);
  body.append("key", "79ab67f654b41c031cf3f35c5d0e0bd1");

  const response = await fetch("https://api.imgbb.com/1/upload", {
    method: "POST",
    body: body,
  });
  if (response) {
    console.log(response.json());
    toast.add({
      severity: "info",
      summary: "Success",
      detail: "File Uploaded",
      life: 10000,
    });
  }
  // reader.readAsDataURL(response);
  //
  // reader.onloadend = function () {
  //   const base64data = reader.result;
  // };
};

</script>

<template>
  <div class="w-32">
    <div class="box-border h-44 w-33 border-2 border-slate-200 rounded border-dashed flex items-center justify-center">
      <Image alt="Image" :preview="src.length>0">
        <template #image>
          <img :src="src||placeholderMap[name]" alt="image" class="h-43 w-32 object-cover object-center"/>
        </template>
        <template #preview="slotProps">
          <img :src="src||placeholderMap[name]" alt="preview" :style="slotProps.style"
               @click="slotProps.onClick"/>
        </template>
      </Image>
    </div>
    <span>{{ props.title ?? "-" }}</span>
    <FileUpload mode="basic" name="demo[]" url="https://www.picgo.net/api/1/upload" accept="image/*"
                :maxFileSize="10000000" @uploader="onUpload" :auto="true" customUpload chooseLabel="Upload"/>
  </div>
</template>

<style scoped>

</style>