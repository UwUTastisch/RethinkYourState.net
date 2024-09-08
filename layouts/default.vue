<template>
  <div class="flex flex-col min-h-screen">
    <LayoutsAppHeader />

    <main class="flex-1 bg-slate-50 dark:bg-slate-950 flex justify-center">
      <div class="flex-1 flex justify-center">
          <slot />
      </div>
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
