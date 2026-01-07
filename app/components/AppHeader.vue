<script setup lang="ts">
</script>

<template>
  <header class="masthead">
    <nav class="flex items-center justify-between">
      <h3 class="masthead-title">
        <NuxtLink to="/" class="text-blue-logo dark:text-cyan no-underline hover:no-underline">
          <span class="font-logo text-2xl">JP</span>
        </NuxtLink>
      </h3>

      <div class="flex items-center gap-4">
        <ul class="nav-list">
          <li>
            <NuxtLink to="/projects" class="text-gray-600 dark:text-gray-300 hover:text-blue dark:hover:text-cyan">
              Work & Projects
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/writing" class="text-gray-600 dark:text-gray-300 hover:text-blue dark:hover:text-cyan">
              Writing
            </NuxtLink>
          </li>
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  </header>
</template>
