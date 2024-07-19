<template>
  <div class="card flex justify-center">
    <Menu :model="items" class="w-full md:w-60">
      <template #start>
        <button v-ripple
                class="relative overflow-hidden w-full border-0 bg-transparent flex items-start p-2 pl-4 hover:bg-surface-100 dark:hover:bg-surface-800 rounded-none cursor-pointer transition-colors duration-200">
          <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" class="mr-2" size="xlarge"
                  shape="circle"/>

          <span class="inline-flex flex-col items-start">
              <span class="font-bold mb-1">Amy Elsner</span>
              <Tag severity="contrast" value="Doctor" rounded></Tag>
          </span>
        </button>
      </template>
      <template #submenuheader="{ item }">
        <span class="text-primary font-bold">{{ item.label }}</span>
      </template>
      <template #item="{ item, props }">
        <a v-ripple class="flex items-center" v-bind="props.action">
          <span :class="item.icon"/>
          <span>{{ item.label }}</span>
          <Badge v-if="item.badge" class="ml-auto" :value="item.badge"/>
        </a>
      </template>
    </Menu>
  </div>
</template>

<script setup>
import {ref} from "vue";

const items = ref([
  {label: 'Workbench', icon: 'pi pi-fw pi-home'},
  {label: 'Create New Case', icon: 'pi pi-plus'},
  {label: 'Case Management', icon: 'pi pi-folder', badge: '5'},
  {label: 'To Be Reviewed', badge: '1'},
  {label: 'To Be Processed', badge: '1'},
  {label: 'In progress', badge: 0},
  {label: 'To Be Received', badge: '1'},
  {label: 'Completed', badge: '1'},
  {label: 'Draft Box', badge: '1'},
]);
</script>
