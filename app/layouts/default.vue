<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen">
    <main class="relative mx-auto w-full max-w-xl px-6 py-16 max-sm:py-10">
      <!-- offsets = main padding minus the button's p-2, so the icon sits on the content edge -->
      <div class="absolute right-4 top-14 max-sm:top-8">
        <ThemeToggle />
      </div>
      <slot />
    </main>
  </div>
</template>
