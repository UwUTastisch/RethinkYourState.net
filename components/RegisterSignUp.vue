<template>
  <div class="max-w-lg w-full">
    <div
      style="
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
          0 10px 10px -5px rgba(0, 0, 0, 0.04);
      "
      class="bg-gray-800 rounded-lg shadow-xl overflow-hidden"
    >
      <div class="p-8">
        <h2 class="text-center text-3xl font-extrabold text-white">
          {{ isSingUpNotLogin ? "Create an Account" : "Welcome Back" }}
        </h2>
        <p class="mt-4 text-center text-gray-400">
          {{ isSingUpNotLogin ? "Sign up to continue" : "Sign in to continue" }}
        </p>
        <form method="POST" action="#" class="mt-8 space-y-6">
          <div class="rounded-md shadow-sm">
            <div>
              <label class="sr-only" for="email">Email address</label>
              <input
                placeholder="Email address"
                class="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                required=""
                autocomplete="email"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div class="mt-4">
              <label class="sr-only" for="password">Password</label>
              <input
                placeholder="Password"
                class="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                required=""
                autocomplete="new-password"
                type="password"
                name="password"
                id="password"
              />
            </div>
            <div v-if="isSingUpNotLogin" class="mt-4">
              <label class="sr-only" for="confirm-password"
                >Confirm Password</label
              >
              <input
                placeholder="Confirm Password"
                class="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                required=""
                autocomplete="new-password"
                type="password"
                name="confirm-password"
                id="confirm-password"
              />
            </div>
          </div>

          <div class="flex items-center justify-between mt-4">
          <div class="flex items-center">
            <input
              class="h-4 w-4 text-indigo-500 focus:ring-indigo-400 border-gray-600 rounded"
              type="checkbox"
              name="remember-me"
              id="remember-me"
            />
            <label class="ml-2 block text-sm text-gray-400" for="remember-me"
              >Remember me</label
            >
          </div>

          <div v-if="!isSingUpNotLogin" class="text-sm">
            <a
              class="font-medium text-indigo-500 hover:text-indigo-400"
              href="#"
            >
              Forgot your password?
            </a>
          </div>
        </div>

          <div>
            <button
              class="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              type="submit"
            >
              {{ isSingUpNotLogin ? "Sign Up" : "Sign In" }}
            </button>
          </div>
        </form>
      </div>
      <div class="px-8 py-4 bg-gray-700 text-center">
        <span class="text-gray-400">
          {{
            isSingUpNotLogin
              ? "Already have an account?"
              : "Don't have an account?"
          }}
        </span>
        <a
          class="font-medium text-indigo-500 hover:text-indigo-400"
          :href="isSingUpNotLogin ? '/login' : '/register'"
          >{{ isSingUpNotLogin ? " Sign in" : " Sign up" }}</a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  isSingUpNotLogin: {
    type: Boolean,
    default: false,
  },
});
</script>

<style></style>
