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
                <button class="border border-0 bg-transparent" @click="printTicket"><span class="material-symbols-outlined">print</span></button>
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
import { jsPDF } from 'jspdf';
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
        },
        printTicket() {
            const doc = new jsPDF();
            const ticket = this.ticket;

            doc.setFontSize(20);
            doc.text('TIKET BANTUAN', 105, 20, null, null, 'center');

            doc.setFontSize(12);
            doc.text('Judul', 20, 40);
            doc.text(`: ${ticket.judul}`, 60, 40);
            doc.text('Nama', 20, 50);
            doc.text(`: ${ticket.namaLengkap}`, 60, 50);
            doc.text('Email', 20, 60);
            doc.text(`: ${ticket.email}`, 60, 60);
            doc.text('Kontak', 20, 70);
            doc.text(`: ${ticket.kontak}`, 60, 70);
            doc.text('Status tiket', 20, 80);
            doc.text(`${ticket.detail} \n\n\n\nBalasan tiket \n\n${ticket.komentar}`, 20, 100);

            doc.setLineWidth(0.5);
            doc.line(20, 30, 190, 30);
            doc.line(20, 90, 190, 90);

            doc.setDrawColor('#1adb27');
            doc.setFillColor(255,255,255);
            doc.roundedRect(60+2, 80-5, 20, 10-2, 2, 2, "FD");
            doc.text(`: ${ticket.status}`, 60, 80);

            window.open(doc.output('bloburl'), '_blank');
            // doc.save('tiket-laporan.pdf');
        }
    }
}
</script>

<style scoped>
.view-ticket {
    background-color: white;
}
</style>