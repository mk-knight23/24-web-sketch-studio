<template>
  <div class="home p-6">
    <h1 class="text-3xl font-bold mb-4">Welcome to Sketch Studio</h1>
    <p class="text-lg mb-6">Professional multi-layer canvas drawing application.</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h2 class="text-xl font-semibold mb-2">Canvas</h2>
        <p class="text-gray-600 dark:text-gray-400">Create and edit your sketches with powerful tools.</p>
      </div>
      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h2 class="text-xl font-semibold mb-2">Layers</h2>
        <p class="text-gray-600 dark:text-gray-400">Manage multiple layers for complex artwork.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useUserStore } from '../stores/userStore'

const userStore = useUserStore()
onMounted(() => {
  userStore.incrementVisits()
})
</script>
