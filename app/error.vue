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
  <div class="min-h-screen flex items-center justify-center bg-white dark:bg-gray-700">
    <div class="text-center">
      <h1 class="text-6xl font-bold text-gray-300 dark:text-gray-600 mb-4">
        {{ error.statusCode }}
      </h1>
      <p class="text-xl text-gray-600 dark:text-gray-400 mb-8">
        {{ error.statusMessage || 'An error occurred' }}
      </p>
      <button
        class="px-6 py-2 bg-blue text-white rounded hover:bg-blue-logo transition-colors"
        @click="handleError"
      >
        Go back home
      </button>
    </div>
  </div>
</template>
