<script setup lang="ts">
import MainMenu from "../components/MainMenu.vue";
</script>

<template>
  <div class="h-screen w-screen flex flex-row">
    <MainMenu/>
    <router-view class="grow"/>
  </div>
</template>

<style lang="css" scoped>

</style>
