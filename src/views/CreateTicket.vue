<template>
    <div class="container">
        <div class="create-form border border-1 my-2 p-4">
            <h4>Buat Tiket Bantuan</h4>
            <p class="text-secondary">Halaman ini adalah formulir untuk membuat tiket bantuan baru. Isikan formulir dan sistem layanan bantuan akan mencoba untuk merespon tiket bantuan secepatnya.   </p>

            <div class="d-flex flex-row">
                <form class="form-group" @submit.prevent="createTicket">
                    <div class="mb-2 form-input">
                        <label for="" class="form-label">Nama Lengkap</label>
                        <input type="text" v-model="tiket.namaLengkap" class="form-control" required/>
                    </div>

                    <div class="mb-2 form-input">
                        <label for="" class="form-label">Email</label>
                        <input type="text" v-model="tiket.email" class="form-control" required/>
                    </div>

                    <div class="mb-2 form-input">
                        <label for="" class="form-label">Nomor HP</label>
                        <input type="text" v-model="tiket.kontak" class="form-control" required/>
                    </div>

                    <div class="mb-2 form-input">
                        <label for="" class="form-label">Dokumen tambahan</label>
                        <input type="file" class="form-control" id="file" accept="application/pdf" @change="handleDocumentInput" />
                    </div>

                    <div class="my-4" id="ticket-detail">
                        <h6>Detil Tiket</h6>
                        <hr>
                        <label for="" class="form-label">Ringkasan</label>
                        <input type="text" v-model="tiket.judul" class="form-control" required/>
                        <br>
                        <textarea v-model="tiket.detail" rows="5" class="form-control" placeholder="Detail dari bantuan..." required></textarea>
                        
                        <button type="submit" class="btn btn-primary my-5 w-50" :disabled="isFormEmpty">Buat Tiket</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import api from '@/api/ticket.api';
export default {
    computed: {
        isFormEmpty() {
            return Object.values(this.tiket).includes('');
        }
    },
    data() {
        return {
            tiket: {
                namaLengkap: '',
                email: '',
                kontak: '',
                judul: '',
                detail: ''
            },
            dokumen: null
        }
    },
    created() {
        this.tiket.email = localStorage.getItem('email');
    },
    methods: {
        createTicket() {
            const tiket = this.tiket;
            tiket.komentar = "";
            tiket.pengomentar = "";
            tiket.status = "menunggu";
            tiket.asosiasiDokumen = "";
            tiket.userId = localStorage.getItem('id');

            const token = localStorage.getItem('accessToken');
            this.axios(api.addTicket(tiket, token))
            .then(response => {
                if (response.status == 200) {
                    const data = response.data;

                    const ticketId = data?.data?.id;
                    if (ticketId && this.dokumen !== null) {
                        this.createTicketAttachDoc(ticketId);
                    }
                    console.log(data);
                    alert('Tiket berhasil dibuat');
                }
                console.log(`Status code: ${response.status}`)
            })
            .catch(err => {
                console.log('Ada kesalahan');
            })
        },
        createTicketAttachDoc(ticketId) {
            this.axios(api.updateTicketWithDocAttachment(ticketId, this.dokumen))
            .then(response => {
                if (response.status == 200) {
                    const data = response.data;

                    console.log(data);
                    this.dokumen = null;
                }
            })
            .catch(err => {
                console.log('Ada kesalahan');
            })
            .finally(() => {
                return;
            })
        },
        handleDocumentInput(event) {
            const file = event.target.files[0];
            if (file && file.type === 'application/pdf') {
                this.dokumen = file;
            } else {
                alert('Hanya dokumen pdf yang dapat diunggah!');
                event.target.value = "";
                this.dokumen = null;
            }
        }
    }
}
</script>

<style scoped>
.create-form {
    background-color: white;
}

.form-group {
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
}

#ticket-detail {
    display:flex;
    flex-direction: column;
}

@media (min-width: 768px) {
    .form-input {
        width: 45%;
    }

    #ticket-detail {
        width: 100%;
    }
}
</style>