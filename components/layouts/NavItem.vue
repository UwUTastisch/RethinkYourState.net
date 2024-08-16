<script setup lang="ts">
import type { PropType } from "vue";
import { useRoute } from "vue-router";

defineProps({
  item: {
    type: Object as PropType<Navigation>,
    required: true,
  },
});
</script>

<template>
  <div>
    <NuxtLink :to="item.to">
      <div
        class="p-1 rounded-lg min-w-32 ml-1 mr-1 hover:bg-blue-500"
        :class="
          $route.path === item.to
        ? 'bg-green-800 dark:bg-green-800'
        : 'bg-green-900 dark:bg-green-900'
        "
      >
        <div class="text-center text-white flex">
          <div class="w-7 h-7 flex mr-0 ml-1 m-auto">
            <Icon :name="item.icon" class="flex-auto m-auto" />
          </div>
          <div class="m-auto mt-0">-</div>
          <div class="ml-0 mr-2">{{ item.name }}</div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>
