<script setup lang="ts">
defineProps<{
  error: {
    statusCode: number
    statusMessage: string
  }
}>()

useHead({
  title: 'Error - Jonathan Pichot',
})

function handleError() {
  clearError({ redirect: '/' })
}
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-canvas font-serif text-ink">
    <div class="text-center">
      <p class="mb-4 font-mono text-5xl text-edge-strong">
        {{ error.statusCode }}
      </p>
      <p class="mb-8 text-muted">
        {{ error.statusMessage || 'An error occurred' }}
      </p>
      <button class="link-mono" @click="handleError">
        &larr; Jonathan Pichot
      </button>
    </div>
  </div>
</template>
