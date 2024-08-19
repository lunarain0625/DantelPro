<script setup lang="ts">
import {specialtyOptions} from "../../assets/CONSTANT.js";
import {ref} from "vue";
const model = defineModel();
const isCustom = ref(false);
const isEmpty = ref(false);
const selectedOptions = ref([]);
const updateModel = () => {
  if (isEmpty.value) {
    model.value = ""
  } else {
    model.value = selectedOptions.value.join(",");
  }
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-wrap gap-2">
      <div class="flex items-center gap-2">
        <Checkbox :binary="true" v-model="isCustom" @change="selectedOptions=[];isEmpty=false"/>
        <label for="custom">自定义</label>
      </div>
      <div v-for="option in specialtyOptions" :key="option.value" class="flex items-center gap-2">
        <Checkbox :inputId="option.value" name="option" :value="option.value" v-model="selectedOptions"
                  @change="isCustom=false;isEmpty=false;updateModel()"/>
        <label :for="option.value">{{ option.label }}</label>
      </div>
      <div class="flex items-center gap-2">
        <Checkbox :binary="true" v-model="isEmpty" @change="selectedOptions=[];isCustom=false;updateModel()"/>
        <label for="empty">无</label>
      </div>
    </div>
    <Textarea v-if="isCustom" autoResize rows="2" cols="60" v-model="model"/>
  </div>
</template>

<style scoped>

</style>