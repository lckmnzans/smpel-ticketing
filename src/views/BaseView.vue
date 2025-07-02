<template>
    <div class="view-view d-flex flex-column">
        <Header :application-title="'Aplikasi Tiket Sederhana'"/>
        <main>
            <RouterView />
        </main>
        <Footer :footer-message="'© 2025 Gawe-gawe Tim'" />
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
export default {
    components: { Header, Footer }
}
</script>

<style scoped>
.view-view {
    background-color: #dfdfdf;
    height: inherit;
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