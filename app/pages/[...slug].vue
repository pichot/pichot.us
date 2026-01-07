<script setup lang="ts">
useHead({
  title: 'Page Not Found - Jonathan Pichot',
})

throw createError({
  statusCode: 404,
  statusMessage: 'Page Not Found',
  fatal: true,
})
</script>

<template>
  <div class="text-center py-20">
    <h1 class="text-6xl font-bold text-gray-300 dark:text-gray-600 mb-4">
      404
    </h1>
    <p class="text-xl text-gray-600 dark:text-gray-400 mb-8">
      Page not found
    </p>
    <NuxtLink
      to="/"
      class="text-blue dark:text-cyan hover:underline"
    >
      Go back home
    </NuxtLink>
  </div>
</template>
