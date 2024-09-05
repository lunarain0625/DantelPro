<script setup lang="ts">
import axios from "axios";
import CardViewSkeleton from "@/components/Elements/CardViewSkeleton.vue";

const loaded = ref(false);

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
  const token = res.data.access_token;
  return token;
}

function init_fractal3d(accessToken) {
  const container = document.getElementById("everapi-1");
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
  let instance = window.EverAPI.getInstanceById("everapi-1");

  return instance;
}

get_access_token().then((token) => {
  const instance = init_fractal3d(token);
  console.log('token')
  //open a file without conversion

  // const config = document.getElementById("config-text").value;
  instance.config({lang: 'en'});

  instance.openFiles([
    {filename: "demo.stl", url: 'https://alphacdn.protectmec.com/uploads/2024/07/ea5d220240723112304993801.stl'},
  ]);
});

const iframeLoaded = (event: any) => {
  console.log('iframe loaded', event)
  loaded.value = true
}
</script>

<template>
  <!--  <div id="everapi-1" style="height: 600px; width: 800px;"></div>-->
  <CardViewSkeleton v-if="!loaded"/>
  <iframe
      @load="iframeLoaded"
      class="grow"
      src="http://testsharon.protectmec.com/third/illcase/showplan/case_no/SH20220111/plan_id/17231/key/dd606f67-cb4d-4a32-9a5a-a91ed7740c75"></iframe>
</template>
<style scoped>

</style>
