<script setup lang="ts">
import {OSS_UPLOAD_URL, OSS_URL, placeholderMap, QINIU_TOKEN} from "../../assets/CONSTANT.js";
import {useToast} from "primevue/usetoast";
import {ref} from "vue";
import {useConfirm} from "primevue/useconfirm";
import axios from "axios";

const props = defineProps({
  src: String,
  title: String,
  name: String,
})
const emit = defineEmits(['onFileChange']);
const confirm = useConfirm();
const toast = useToast();
const uploading = ref(false);
const onUpload = async (event) => {
  try {
    uploading.value = true;
    const file = event.files[0];
    const body = new FormData();
    body.append("file", file);
    body.append("token", QINIU_TOKEN);
    const response = await axios.post(OSS_UPLOAD_URL, body);
    if (response) {
      const url = OSS_URL + response.data.key
      console.log(url)
      emit('onFileChange', {name: props.name, url: url})
      toast.add({
        severity: "info",
        summary: "Success",
        detail: "File Uploaded",
        life: 10000,
      });
    }
  } catch (e) {
    toast.add({severity: 'error', summary: 'Error Message', detail: 'Upload failed', life: 3000});
  } finally {
    uploading.value = false;
  }
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
      emit('onFileChange', {name: props.name, url: ''})
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
      <FileUpload @uploader="onUpload" :auto="true" customUpload>
        <template #header="{chooseCallback}">
          <div class="flex gap-2 grow justify-center">
            <Button @click="chooseCallback()" icon="pi pi-cloud-upload" severity="primary" label="Upload"/>
            <Button v-if="src" icon="pi pi-times" iconPos="left" severity="danger" @click="confirmDelete($event)"/>
          </div>
        </template>
        <template #empty>
          <div class="flex items-center justify-center flex-col">
            <div class="relative">
              <div v-if="src && !uploading"
                   class="absolute bg-black opacity-80 inset-0 flex flex-col items-center justify-center">
                <Avatar icon="pi pi-check" class="mb-2" style="background-color: forestgreen; color: #ffffff"
                        shape="circle"
                        size="xlarge"/>
                <span>Uploaded</span>
              </div>
              <div v-if="uploading"
                   class="absolute bg-black opacity-80 inset-0 flex flex-col items-center justify-center">
                <ProgressSpinner/>
              </div>
              <Image alt="Image">
                <template #image>
                  <img :src="placeholderMap[name]" alt="image" class="h-40 w-40 object-cover object-center"/>
                </template>
              </Image>
            </div>
            <p class="mt-6 mb-0">Drag and drop files to here to upload.</p>
          </div>
        </template>
      </FileUpload>
    </div>
    <span>{{ props.title ?? "-" }}</span>
  </div>
</template>

<style scoped>

</style>
