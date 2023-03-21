<template>
  <div>
    <header class="shadow-sm">
      <nav class="container mx-auto p-2 flex justify-between">
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to= "/blog">Blog</NuxtLink></li>
          <select v-model="$colorMode.preference">
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="sepia">Sepia</option>
          </select>
        </ul>
      </nav>
    </header>
    <!-- content is inserted here-->
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: #164e63;
}
</style>

<script setup lang="ts">
  const colorMode = useColorMode()

  console.log(colorMode)
</script>
