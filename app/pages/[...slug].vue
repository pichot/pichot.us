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
  <div class="py-20 text-center">
    <p class="mb-4 font-mono text-5xl text-edge-strong">
      404
    </p>
    <p class="mb-8 text-muted">
      Page not found
    </p>
    <NuxtLink to="/" class="link-mono">
      &larr; Jonathan Pichot
    </NuxtLink>
  </div>
</template>
