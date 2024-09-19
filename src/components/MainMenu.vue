<template>
  <div class="card flex justify-center">
    <Menu :model="items" class="w-full md:w-60">
      <template #start>
        <button v-ripple
                class="relative overflow-hidden w-full border-0 bg-transparent flex items-start p-2 pl-4 hover:bg-surface-100 dark:hover:bg-surface-800 rounded-none cursor-pointer transition-colors duration-200">
          <Avatar image="http://sj51dvojc.hn-bkt.clouddn.com/sharon_avatar.png" class="mr-2" size="xlarge"
                  shape="circle"/>

          <span class="inline-flex flex-col items-start">
              <span class="font-bold mb-1">Sharon</span>
              <Tag severity="contrast" value="Doctor" rounded></Tag>
          </span>
        </button>
      </template>
      <template #item="{ item, props }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a v-ripple :href="href" v-bind="props.action" @click="navigate" class="flex items-center">
            <span :class="item.icon"/>
            <span>{{ item.label }}</span>
            <Badge v-if="item.badge" class="ml-auto" :value="item.badge"/>
          </a>
        </router-link>
        <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
          <span :class="item.icon"/>
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </template>
    </Menu>
  </div>
</template>

<script setup>
import {ref} from "vue";
import authRequest from "@/service/authRequest.js";
import API from "@/assets/API.js";
const items = ref([
  // {
  //   label: 'Workbench', icon: 'pi pi-fw pi-home', route: '/model'
  // },
  {label: 'Create New Case', icon: 'pi pi-plus', route: '/addCase'},
  {label: 'Case Management', icon: 'pi pi-folder', badge: 0, route: '/all'},
  {label: 'To Be Reviewed', badge: 0, route: '/tbr'},
  {label: 'To Be Processed', badge: 0, route: '/tbp'},
  {label: 'In progress', badge: 0, route: '/ip'},
  {label: 'To Be Received', badge: 0, route: '/tobereceived'},
  {label: 'Completed', badge: 0, route: '/completed'},
  {label: 'Draft Box', badge: 0, route: '/all'},
]);
onMounted(async () => {
  const {data} = await authRequest.get(API.CASE_LIST)
  items.value[1].badge = data.data.length;
  items.value[3].badge = 0;
  items.value[4].badge = 0;
  items.value[5].badge = 0;
  items.value[6].badge = 0;
  items.value[7].badge = 0;
})

</script>
