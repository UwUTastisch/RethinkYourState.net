<template>
  <div class="flex flex-col min-h-screen">
    <LayoutsAppHeader />

    <main class="flex-1 bg-slate-50 dark:bg-slate-950 flex justify-center">
      <div
        class="flex-1 bg-gradient-to-r from-blue-300 dark:from-blue-900 via-cyan-300 dark:via-cyan-900 to-teal-300 dark:to-teal-900"
      />
      <div class="bg-white dark:bg-slate-800 flex max-w-5xl flex-auto p-2">
        <slot />
      </div>
      <div
        class="flex-1 shadow-inner bg-gradient-to-r from-teal-300 dark:from-teal-900 via-cyan-300 dark:via-cyan-900 to-blue-300 dark:to-blue-900"
      />
    </main>
    <LayoutsAppFooter />
  </div>
</template>

<script lang="ts" setup></script>

<style>
body,
.f {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
