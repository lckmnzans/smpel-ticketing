<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="parent d-flex flex-column">
    <Header :application-title="'Aplikasi Tiket Sederhana'"/>
    <main>
      <RouterView />
    </main>
    <Footer :footer-message="'© 2025 Gawe-gawe Tim'" />
  </div>
</template>

<style scoped>
.parent {
  height: 100vh;
}

.header {
  top: 0;
}

.footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}

main {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  main {
    display: flex;
    place-items: center;
  }
}
</style>
