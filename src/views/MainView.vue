<template>
    <div class="container">
        <div class="main-content border border-1 my-2 p-4">
            <h4>Layanan Bantuan</h4>
            <p class="text-secondary">Selamat datang di layanan  bantuan. Berikut adalah tiket yang pernah anda kirimkan.</p>
            <ul class="d-flex flex-row py-2 px-0 gap-4">
                <li v-for="(ticket, index) in tickets" :key="index" class="border border-primary" @click.prevent="toViewTicket(index)">
                    <div class="d-flex flex-column p-2">
                        <p>{{ ticket.judul }}</p>
                        <p>{{ ticket.dibuatTanggal }}</p>
                        <span class="badge" :class="`text-bg-${statusTiket(ticket.status)}`"><span class="text">{{ ticket.status }}</span></span>
                    </div>
                </li>
                <li class="border border-primary" @click.prevent="toCreateTicket">
                    <div class="d-flex flex-column align-items-center justify-content-between px-2">
                        <p style="text-align: center;">Tambah tiket</p>
                        <span class="material-symbols-outlined">add_circle</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import FormCard from '@/components/FormCard.vue';
export default {
    components: { FormCard },
    data() {
        return {
            tickets : [
                {id: 1, judul: 'Tiket 1', dibuatTanggal: '01-01-2025', status: 'selesai'},
                {id: 2, judul: 'Tiket 2', dibuatTanggal: '02-01-2025', status: 'diproses'},
                {id: 3, judul: 'Tiket 3', dibuatTanggal: '03-01-2025', status: 'menunggu'},
            ]
        }
    },
    methods: {
        statusTiket(status) {
            switch (status) {
                case 'selesai':
                    return 'success';
                case 'diproses':
                    return 'secondary';
                default:
                    return 'primary';
            }
        },
        toCreateTicket() {
            this.$router.push({ name: 'create' });
        },
        toViewTicket(id) {
            this.$router.push({ name: 'view', params: { index: id } });
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
        width: 12rem;
    }

    li:hover {
        border-radius: 6px;
        cursor: pointer;
    }
}
</style>
