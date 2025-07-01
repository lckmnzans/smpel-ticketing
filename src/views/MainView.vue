<template>
    <div class="parent container border border-primary">
        <div class="header">
            <Header :application-title="'Aplikasi Sederhana'" />
        </div>
        <div class="main-content border border-1 my-2 px-2">
            <p>Ini daftar tiket anda</p>
            <ul class="d-flex flex-row px-0 gap-1">
                <li v-for="(item, index) in items" :key="index">
                    <div class="d-flex flex-column align-items-center">
                        <p>{{ index }}</p>
                        <p>{{ item.name }}</p>
                    </div>
                </li>
                <li>
                    <p style="text-align: center;">Tambah tiket</p>
                    <div class="d-flex flex-column align-items-center justify-content-center">
                        <span class="material-symbols-outlined">add_circle</span>
                    </div>
                </li>
            </ul>
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
            items : [
                {id: 1, name: 'Tiket 1'},
                {id: 2, name: 'Tiket 2'},
                {id: 3, name: 'Tiket 3'},
            ]
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

    p {
        text-align: start;

    }

    li {
        list-style: none;
        border: 1px solid black;
        width: 6rem;
    }

    li:hover {
        border-radius: 6px;
        cursor: pointer;
    }
}

.footer { 
    background-color: cornflowerblue;
    color: white;

    p {
        font-size: small;
        text-align: center;
    }
}
</style>
