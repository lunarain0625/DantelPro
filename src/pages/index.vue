<script setup lang="ts">
import Info from "./info.vue";
import BasicInfoView from "../components/CreateCase/BasicInfoView.vue";
import DesignInfoView from "../components/CreateCase/DesignInfoView.vue";
import ImageInfoView from "../components/CreateCase/ImageInfoView.vue";
import MainMenu from "../components/MainMenu.vue";
</script>

<template>
  <div class="h-screen w-screen flex flex-row bg-green-500">
    <MainMenu/>
    <router-view class="grow" />
  </div>
</template>

<style lang="css" scoped>

</style>