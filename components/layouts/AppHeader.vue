<template>
  <header>
    <div>
      <div
        class="flex justify-center pt-2 pb-2 bg-indigo-800 dark:bg-indigo-950"
      >
        <NavItem v-for="entry in navigation" :key="entry.name" :item="entry" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import NavItem from "~/components/layouts/NavItem.vue";
import type { Navigation } from "~/utils/useNavigation";

defineProps({
  isText: {
    type: Boolean,
    default: false,
  },
});

const navigation = getNavigation("home") as Record<string, Navigation>;
</script>
