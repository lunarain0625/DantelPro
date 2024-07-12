<script setup lang="ts">
import {defineComponent} from "vue";
import HelloWorld from "../components/HelloWorld.vue";
import {ref} from "vue";

const value = ref();
const items = ref([]);
const search = () => {
  console.log(value.value)
}
</script>

<template>
  <h2>111133</h2>
  <InputText type="text" v-model="value"/>
  <Button @click="search">搜索</Button>
</template>

<style lang="css" scoped>
</style>