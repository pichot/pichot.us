<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <div class="container flex-1">
      <AppHeader />
      <main>
        <slot />
      </main>
    </div>
    <AppFooter />
  </div>
</template>
