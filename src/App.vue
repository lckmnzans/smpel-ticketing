<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  line-height: 1.5;
  height: 100vh;
}

@media (min-width: 1024px) {
  main {
    display: flex;
    place-items: center;
  }
}
</style>
