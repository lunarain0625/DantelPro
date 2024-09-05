<script setup lang="ts">
import MainMenu from "../components/MainMenu.vue";
</script>

<template>
  <div class="w-screen">
    <div class="flex flex-row bg-primary p-4 items-center">
      <Image width="40" src="https://static.wixstatic.com/media/438f5b_4f83ac56d9324fbb90ef75dbc1f6cc24~mv2.png"/>
      <span class="text-3xl font-bold text-white ml-4 mr-12">Avignon Dental Clinic</span>

    </div>
    <div class=" flex flex-row h-screen">
      <MainMenu/>
      <router-view class="grow"/>
    </div>
  </div>
</template>

<style lang="css" scoped>

</style>
