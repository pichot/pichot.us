<template>
  <div class="min-h-screen">
    <main class="mx-auto w-full max-w-xl px-6 py-10 max-sm:py-8">
      <header class="mb-12 flex items-center justify-between max-sm:mb-10">
        <NuxtLink to="/" aria-label="Jonathan Pichot, home" class="transition-opacity hover:opacity-80">
          <LogoMark class="h-8 w-auto" />
        </NuxtLink>
        <!-- -mr-2 cancels the button's p-2 so the icon sits on the content edge -->
        <ThemeToggle class="-mr-2" />
      </header>
      <slot />
    </main>
  </div>
</template>
