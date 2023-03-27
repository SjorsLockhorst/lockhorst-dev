<template>
  <div>
    <header class="shadow-sm">
      <nav class="container mx-auto p-2 flex justify-between">
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/#links">Links</NuxtLink></li>
          <li><NuxtLink to="/#about-me">About Me</NuxtLink></li>
          <li><NuxtLink to="/blog">Blog</NuxtLink></li>
          <select v-model="$colorMode.preference">
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </ul>
      </nav>
    </header>
    <!-- content is inserted here-->
    <div class="container mx-auto p-4 min-h-screen">
      <slot />
    </div>
    <footer>
      <div class="grid grid-cols-1 md:grid-cols-3 text-center">
        <div>Je boy SjorsTM</div>
        <div>Sitemap</div>
        <div>Contact</div>
      </div>
    </footer>
  </div>
</template>

<!--TODO: Fix these colors. -->
<style scoped>
.light-mode.router-link-exact-active {
  color: #000000;
}
.dark-mode.router-link-exact-active {
  color: #ffffff;
}
</style>
<!--TODO: Add automatically initialising to system here.-->
