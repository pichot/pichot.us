<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="py-8 mt-12 border-t border-gray-200 dark:border-gray-600">
    <div class="container">
      <small class="text-gray-500 dark:text-gray-400">
        &copy; {{ currentYear }} Jonathan Pichot
        &bull;
        <a
          href="https://www.linkedin.com/in/jonathanpichot/"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-blue dark:hover:text-cyan"
        >
          LinkedIn
        </a>
        &bull;
        <a
          href="https://twitter.com/_pichot"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-blue dark:hover:text-cyan"
        >
          Twitter
        </a>
        &bull;
        <a
          href="https://github.com/pichot"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-blue dark:hover:text-cyan"
        >
          Github
        </a>
      </small>
    </div>
  </footer>
</template>
