<template>
  <label v-if="show" class="flex items-center cursor-pointer dark:bg-black bg-white rounded-full w-10 h-10  ">
    <input
      type="checkbox"
      value=""
      class="sr-only peer"
      :checked="getCurrentTheme() === 'dark'"
      @change="toggleTheme"
    >
   <Icon
      :name="getCurrentTheme() === 'dark' ? 'line-md:sunny-outline-to-moon-transition' : 'line-md:sunny-outline'"
      class="w-6 h-6 text-gray-900 dark:text-gray-300 m-auto"
    />
  </label>
</template>

<script lang="ts" setup>
const colorMode = useColorMode();

function getCurrentTheme() {
  console.log("Current Theme: " + colorMode.value);
  //Current Theme: system should be light or dark
  if (colorMode.value === "system") {
    console.log("System Theme: " + colorMode.preference);
  }

  return colorMode.value;
}

function toggleTheme() {
  const theme = getCurrentTheme();
  console.log("Toggle: " + theme);
  if (theme === "dark") {
    colorMode.value = "light";
    colorMode.preference = "light";
  } else {
    colorMode.value = "dark";
    colorMode.preference = "dark";
  }
}

const show = ref(false);
// async function that will make show true after 0 second
setTimeout(() => {
  show.value = true;
}, 0.1);
</script>
