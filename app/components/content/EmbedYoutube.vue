<script setup lang="ts">
defineProps<{
  id: string
}>()
</script>

<template>
  <div class="embed-container my-6">
    <iframe
      :src="`https://www.youtube.com/embed/${id}`"
      class="w-full aspect-video rounded-lg"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
</template>
