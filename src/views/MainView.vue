<template>
    <div class="container border border-primary">
        <div class="header">
            <Header :application-title="'Aplikasi Sederhana'" />
        </div>
        <div class="main-content border border-1 my-2">
            <p>{{ message }}</p>
        </div>
        <div class="footer">
            <Footer :footer-message="'Dibuat oleh Lukman Sanusi'" />
        </div>
    </div>
</template>
<script>
import Header from '@/components/Header.vue';
import FormCard from '@/components/FormCard.vue';
import Footer from '@/components/Footer.vue';
export default {
    components: { Header, FormCard, Footer },
    data() {
        return {
            message: 'Tiket kosong'
        }
    }
}
</script>
<style scoped>
.header {
    background-color:darkslateblue;
    color: white;
}

.main-content {
    min-height: 240px;

    p {
        text-align: center;
    }
}

.footer {
    position: relative;
    background-color: cornflowerblue;
    color: white;
    height: 2rem;
    width: inherit;
    margin-top: auto;

    p {
        font-size: small;
        text-align: center;
    }
}
</style>
