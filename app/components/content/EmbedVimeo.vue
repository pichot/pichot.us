<script setup lang="ts">
defineProps<{
  id: string
}>()
</script>

<template>
  <div class="embed-container my-6">
    <iframe
      :src="`https://player.vimeo.com/video/${id}`"
      class="w-full aspect-video rounded-lg"
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
    />
  </div>
</template>
