<script setup lang="ts">
import {placeholderMap} from "../../assets/CONSTANT.js";
import {useToast} from "primevue/usetoast";
import {ref} from "vue";
import axios from "axios";
import {useConfirm} from "primevue/useconfirm";

const props = defineProps({
  src: String,
  title: String,
  name: String,
})

const emit = defineEmits(['onImageChange']);
const confirm = useConfirm();
const toast = useToast();
const uploading = ref(false);
const onUpload = async (event) => {
  uploading.value = true;
  const file = event.files[0];
  const body = new FormData();
  body.append("file", file);
  body.append("token", "KdY87EnTdSLNX3nMmaHoXPoOGl-i_3b46vwzcVwH:HlZuKduwLKv5tB0z7jQssBYoocc=:eyJzY29wZSI6ImRlbnRhbHBybyIsImRlYWRsaW5lIjoxOTk5OTk5OTk5fQ==");
  const response = await axios.post("https://up-z2.qiniup.com", body);
  if (response) {
    const url = "http://sj51dvojc.hn-bkt.clouddn.com/" + response.data.key
    console.log(url)
    emit('onImageChange', {name: props.name, url: url})
    toast.add({
      severity: "info",
      summary: "Success",
      detail: "File Uploaded",
      life: 10000,
    });
  }
  uploading.value = false;
};

const confirmDelete = (event) => {
  console.log('delete')
  confirm.require({
    target: event.currentTarget,
    message: 'Do you want to delete this image?',
    icon: 'pi pi-info-circle',
    rejectProps: {
      label: 'Cancel',
      severity: 'secondary',
      outlined: true
    },
    acceptProps: {
      label: 'Delete',
      severity: 'danger'
    },
    accept: () => {
      emit('onImageChange', {name: props.name, url: ''})
      toast.add({severity: 'info', summary: 'Confirmed', detail: 'Record deleted', life: 3000});
    },
    reject: () => {
    }
  });
};

</script>

<template>
  <Toast/>
  <ConfirmPopup></ConfirmPopup>
  <div class="flex flex-col w-46 gap-2">
    <div
        class="box-border border-2 border-slate-200 rounded border-dashed flex flex-col gap-2 p-2 items-center justify-center">
      <div class="relative">
        <div v-if="uploading" class="absolute bg-black opacity-80 inset-0 flex flex-col items-center justify-center">
          <ProgressSpinner/>
        </div>
        <Image alt="Image" :preview="src.length>0">
          <template #image>
            <img :src="src||placeholderMap[name]" alt="image" class="h-40 w-40 object-cover object-center"/>
          </template>
          <template #preview="slotProps">
            <img :src="src||placeholderMap[name]" alt="preview" :style="slotProps.style"
                 @click="slotProps.onClick"/>
          </template>
        </Image>
      </div>
      <div class="flex flex-row gap-2">
        <FileUpload mode="basic" name="demo[]" accept="image/*"
                    :maxFileSize="10000000" @uploader="onUpload" :auto="true" customUpload chooseLabel="Upload"/>
        <Button v-if="src" icon="pi pi-times" iconPos="left" severity="danger" @click="confirmDelete($event)"/>
      </div>
    </div>
    <span>{{ props.title ?? "-" }}</span>
  </div>
</template>

<style scoped>

</style>