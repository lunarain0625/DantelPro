<script setup lang="ts">
import axios from "axios";

declare global {
  interface Window {
    EverAPI: any;
  }
}

const props = defineProps({
  solution: {
    type: Object,
    default: {
      stl_up: null,
      stl_down: null,
      stl_all: null,
      planName: null,
      createTime: null
    }
  },
})
const files = [
  {filename: "Maxillary.stl", url: props.solution?.stl_up},
  {filename: "Mandibular.stl", url: props.solution?.stl_down},
]

async function get_access_token() {
  const res = await axios.post(
      "https://portal.fractal3d.everxyz.com/api/users/access-token",
      {
        permissions: [
          {
            resource: "cabin",
            operation: "read",
          },
          {
            resource: "cabin",
            operation: "write",
          },
          {
            resource: "turbine",
            operation: "read",
          },
          {
            resource: "turbine",
            operation: "write",
          },
        ],
      },
      {
        headers: {
          Authorization: "Bearer uk-wNENPogtIYy0u8m8390GqsQOZPxJvWAE",
        },
      },
  );
  return res.data.access_token;
}

function init_fractal3d(accessToken) {
  const container = document.getElementById("everapi-1");
  console.log('instance before add', window.EverAPI.getInstanceById("everapi-1"))
  window.EverAPI._addInstance(
      "everapi-1",
      container,
      {},
      "EverAPIComponent",
  );
  window.EverAPI.loginUtopia(
      accessToken,
      "https://portal.fractal3d.everxyz.com",
  );
  return window.EverAPI.getInstanceById("everapi-1");
}

get_access_token().then((token) => {
  const instance = init_fractal3d(token);
  //open a file without conversion
  instance.config({lang: 'en'});
  instance.openFiles(files);
  console.log('open files:', files)
});


</script>

<template>
  <!--  <CardViewSkeleton v-if="!loaded"/>-->
  <div class="flex flex-row m-4 justify-between">
    <div class="flex flex-col gap-2 items-start">
      <div class="flex items-center gap-2">
        <span class="text-left font-bold text-2xl">{{ props.solution?.planName }}</span>
        <Tag :value="solution?.planStatus" rounded></Tag>
      </div>
      <span>Upload Time：{{ props.solution?.createTime }}</span>
    </div>
    <Button label="Review" icon="pi pi-verified" class="mr-4"/>
  </div>
  <div id="everapi-1" class="m-4 grow"></div>
  <div class=" m-4">
    <Fieldset legend="Animation Photo">
      <div class="flex grow">
        <Image width="250" :src="solution?.moimages" preview/>
      </div>
    </Fieldset>
  </div>
</template>

<style scoped>
</style>
