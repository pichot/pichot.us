<script setup lang="ts">
withDefaults(defineProps<{
  to?: string
  label?: string
}>(), {
  to: '/',
  label: 'Jonathan Pichot',
})
</script>

<template>
  <NuxtLink :to="to" class="link-mono mb-8 inline-block whitespace-nowrap">
    &larr; {{ label }}
  </NuxtLink>
</template>
