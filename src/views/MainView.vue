<template>
    <div class="container">
        <div class="main-content border border-1 my-2 p-4">
            <h4>Layanan Bantuan</h4>
            <p class="text-secondary" v-if="!isAdmin">Selamat datang di layanan  bantuan. Berikut adalah tiket yang pernah anda kirimkan.</p>
            <p class="text-secondary" v-else>Selamat datang di layanan bantuan. Berikut adalah tiket yang masuk di sistem.</p>
            <ul class="d-flex flex-row py-2 px-0 gap-4">
                <li v-for="(ticket, index) in listOfTickets" :key="index" class="border border-primary" @click.prevent="toViewTicket(ticket.id)">
                    <div class="d-flex flex-column p-2">
                        <p>{{ index + 1 }}</p>
                        <p>{{ ticket.judul }}</p>
                        <p class="text-secondary" v-if="isAdmin">{{ ticket.namaLengkap }}</p>
                        <span class="badge" :class="`text-bg-${statusTiket(ticket.status)}`"><span class="text">{{ ticket.status }}</span></span>
                    </div>
                </li>
                <li class="border border-primary" @click.prevent="toCreateTicket" v-if="!isAdmin">
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
import api from '@/api/ticket.api';
import FormCard from '@/components/FormCard.vue';
export default {
    components: { FormCard },
    data() {
        return {
            listOfTickets: [],
            isAdmin: false
        }
    },
    created() {
        const isAdmin = localStorage.getItem('isAdmin');
        this.isAdmin = isAdmin === 'true' ? true : false;

        if (this.isAdmin) {
            this.getAllTickets();
        } else {
            this.getTickets();
        }
    },
    methods: {
        getTickets() {
            const userId = localStorage.getItem('id');

            this.axios(api.getTickets(userId))
            .then(response => {
                if (response.status == 200) {
                    const data = response.data;

                    this.listOfTickets = data.data;
                    console.log(data);
                }
                console.log(`Status code: ${response.status}`)
            })
            .catch(err => {
                console.log('Ada kesalahan');
            })
        },
        getAllTickets() {
            this.axios(api.getAllTickets())
            .then(response => {
                if (response.status == 200) {
                    const data = response.data;

                    this.listOfTickets = data.data;
                    console.log(data);
                }
                console.log(`Status code: ${response.status}`)
            })
            .catch(err => {
                console.log('Ada kesalahan');
            })
        },
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
