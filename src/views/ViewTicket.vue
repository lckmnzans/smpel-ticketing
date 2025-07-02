<template>
    <div class="container">
        <div class="view-ticket border border-1 my-2 p-4">
            <h4>{{ ticket.judul }}</h4>
            <div class="d-flex flex-row justify-content-between">
                <div class="d-flex flex-row justify-content-start gap-2">
                    <p class="text-secondary">{{ ticket.namaLengkap }}</p>
                    <p class="text-secondary">{{ ticket.email }}</p>
                    <p>{{ ticket.dibuatTanggal }}</p>
                </div>
                <span class="material-symbols-outlined">print</span>
            </div>
            <hr>
            <p>{{ ticket.detail }}</p>
            <hr>
            <div class="d-flex flex-row justify-content-between">
                <p :class="`text-${statusTicket(ticket.status)}`">{{ ticket.status }}</p>
                <router-link :to="{ hash: '#reply' }" :hidden="!isAdmin" title="Balas"><span class="material-symbols-outlined">reply</span></router-link>
            </div>
        </div>
        <div class="view-ticket border border-1 my-2 p-4" v-if="ticket.komentar">
            <p class="text-secondary">Tiket dibalas oleh <b>{{ ticket.pengomentar }}</b></p>
            <p>{{ ticket.komentar }}</p>
        </div>
        <div class="view-ticket border border-1 my-2 p-4" v-if="showReplyField">
            <form @submit="updateTicket">
                <textarea class="form-control" rows="5" v-model="ticketReply.balasan"></textarea>
                <button type="submit" class="btn btn-primary mt-5 w-25" :disabled="!ticketReply.balasan">Kirim balasan</button>
            </form>
        </div>
    </div>
</template>
<script>
import api from '@/api/ticket.api';
export default {
    props: ['ticketId','index'],
    data() {
        return {
            isAdmin: false,
            showReplyField: false,
            ticket: {
                id: '0',
                namaLengkap: 'John Doe',
                email: 'jondoe@mail.co',
                kontak: '08123456789',
                judul: 'Lorem ipsum',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices accumsan nunc ac pharetra. Vivamus id fermentum risus, a eleifend sem. Ut vel orci eget purus sollicitudin fringilla ut vel tortor. In hac habitasse platea dictumst. Suspendisse purus mi, semper in neque eget, pharetra semper.',
                komentar: '',
                pengomentar: '',
                asosiasiDokumen: '',
                status: 'diproses',
                userId: '',
            },
            ticketReply: {
                balasan: '',
                pembalas: ''
            }
        }
    },
    watch: {
        '$route'(to) {
            this.showReplyField = to.hash === '#reply';
        }
    },
    created() {
        const isAdmin = localStorage.getItem('isAdmin');
        this.isAdmin = isAdmin === 'true' ? true : false;

        this.fetchData();
    },
    methods: {
        fetchData() {
            const userId = localStorage.getItem('id');

            this.axios(api.getTickets(userId, this.index))
            .then(response => {
                if (response.status == 200) {
                    const data = response.data;

                    this.ticket = data.data;
                    console.log(data);
                }
                console.log(`Status code: ${response.status}`)
            })
            .catch(err => {
                console.log('Ada kesalahan');
            })
        },
        updateTicket() {
            const ticketReply = this.ticketReply;
            ticketReply.pembalas = localStorage.getItem('email');
            const ticketId = this.index;
            const adminId = localStorage.getItem('id');
            this.axios(api.updateTicket(ticketId, adminId, ticketReply))
            .then(response => {
                const data = response.data;

                alert('Sudah terupdate');
                this.$router.back();
            })
            .catch(err => {
                console.log('Ada kesalahan')
            })
        },
        statusTicket(status) {
            switch (status) {
                case 'selesai':
                    return 'success';
                case 'diproses':
                    return 'secondary';
                default:
                    return 'primary';
            }
        }
    }
}
</script>

<style scoped>
.view-ticket {
    background-color: white;
}
</style>