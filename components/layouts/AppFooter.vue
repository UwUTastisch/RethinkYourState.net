<template>
  <footer
    class="flex bg-indigo-900 dark:bg-gray-900 text-white z-50 py-4 w-full bottom-0 left-0 w-100 t-shadow-lg justify-center items-center"
  >
    <div class="absolute">
      <p class="text-sm ">
        &copy; {{ currentYear }} Rethink your State
      </p>
    </div>
    <div class="ml-auto mr-5">
      <LightSwitch />
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped></style>
