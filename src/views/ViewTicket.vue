<template>
    <div class="container">
        <div class="view-ticket border border-1 my-2 p-4">
            <h4>{{ ticket.judul }}</h4>
            <div class="d-flex flex-row justify-content-between">
                <div class="d-flex flex-row justify-content-start gap-2">
                    <p>{{ index }}</p>
                    <p>{{ ticket.namaLengkap }}</p>
                    <p>{{ ticket.dibuatTanggal }}</p>
                </div>
                <span class="material-symbols-outlined">print</span>
            </div>
            <hr>
            <p>{{ ticket.detail }}</p>
            <hr>
            <p :class="`text-${statusTicket(ticket.status)}`">{{ ticket.status }}</p>
        </div>
        <div class="view-ticket border border-1 my-2 p-4">
            <p class="text-secondary">Tiket dibalas oleh <b>{{ ticket.dikomentariOleh }}</b></p>
            <p>{{ ticket.komentar }}</p>
        </div>
    </div>
</template>
<script>
export default {
    props: ['ticketId','index'],
    data() {
        return {
            ticket: {
                id: '0',
                dibuatTanggal: 'DD-MM-YYYY',
                namaLengkap: 'John Doe',
                email: 'jondoe@mail.co',
                kontak: '08123456789',
                judul: 'Permintaan bantuan',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices accumsan nunc ac pharetra. Vivamus id fermentum risus, a eleifend sem. Ut vel orci eget purus sollicitudin fringilla ut vel tortor. In hac habitasse platea dictumst. Suspendisse purus mi, semper in neque eget, pharetra semper.',
                komentar: 'Nunc faucibus nisl eros, non eleifend ligula rhoncus condimentum. Pellentesque condimentum eros et urna pulvinar congue. Praesent elementum diam sed erat fringilla cursus. Sed sed magna a risus interdum maximus a convallis felis. Phasellus nec tortor sed diam placerat rhoncus. Praesent semper purus id lorem iaculis, sit amet tempus mauris sollicitudin. Pellentesque non sapien placerat, iaculis arcu ut, gravida mauris. Curabitur et quam nec nibh tincidunt fermentum. Maecenas sed tristique diam. Praesent convallis et massa ac malesuada. Curabitur at ipsum sed augue finibus ornare. In lectus metus, dictum et urna id, ultrices vulputate turpis. Cras vitae ipsum et lorem convallis rhoncus vitae in massa. Integer ut lectus lectus. Maecenas sodales tortor quam, a fringilla mauris molestie tempor.',
                dikomentariOleh: 'Jane Doe',
                status: 'diproses',
            }
        }
    },
    methods: {
        fetchData() {

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