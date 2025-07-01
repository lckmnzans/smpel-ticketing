<template>
    <div class="container">
        <div class="main-content border border-1 my-2 p-4">
            <h4>Layanan Bantuan</h4>
            <p class="text-secondary">Selamat datang di layanan  bantuan. Berikut adalah tiket yang pernah anda kirimkan.</p>
            <ul class="d-flex flex-row py-2 px-0 gap-4">
                <li v-for="(item, index) in items" :key="index">
                    <div class="d-flex flex-column px-2">
                        <p>{{ index }}</p>
                        <p>{{ item.name }}</p>
                    </div>
                </li>
                <li>
                    <RouterLink to="/create" style="text-decoration: none;">
                        <p style="text-align: center;">Tambah tiket</p>
                        <div class="d-flex flex-column align-items-center justify-content-center px-2">
                            <span class="material-symbols-outlined">add_circle</span>
                        </div>
                    </RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { RouterLink } from 'vue-router';
import FormCard from '@/components/FormCard.vue';
export default {
    components: { FormCard },
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
.main-content {
    background-color: white;

    p {
        text-align: start;

    }

    li {
        list-style: none;
        border: 0.5px solid ;
        width: 6rem;
    }

    li:hover {
        border-radius: 6px;
        cursor: pointer;
    }
}
</style>
