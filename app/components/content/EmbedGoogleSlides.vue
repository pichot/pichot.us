<script setup lang="ts">
defineProps<{
  id: string
}>()
</script>

<template>
  <div class="embed-container my-6">
    <iframe
      :src="`https://docs.google.com/presentation/d/e/${id}/embed?start=false&loop=false&delayms=3000`"
      class="w-full aspect-video rounded-lg"
      frameborder="0"
      allowfullscreen
    />
  </div>
</template>
