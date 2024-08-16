<template>
  <div>
    <NuxtRouteAnnouncer />
  </div>
  <div class="dark:bg-pink-900 slate-900 dark:text-slate-200 h-full">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useSeoMeta({
  title
: 'Rethink your State',
  ogTitle
: 'Rethink your State',
  description
: '',
  ogDescription
: '',
  ogImage
: '/favicon.ico',
  ogUrl
: 'https://rethinkyourstate.net',
  ogType
: 'website',
  ogSiteName
: 'UwUTastisch',
})
useHead({
  htmlAttrs: {
    lang: 'en',
    style: 'font-size: 13px'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.svg'
    }
  ],
})
</script>
