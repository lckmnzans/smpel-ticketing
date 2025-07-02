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

                    <div class="my-4" id="ticket-detail">
                        <h6>Detil Tiket</h6>
                        <hr>
                        <label for="" class="form-label">Ringkasan</label>
                        <input type="text" v-model="tiket.judul" class="form-control" required/>
                        <br>
                        <textarea v-model="tiket.detail" rows="5" class="form-control" placeholder="Detail dari bantuan..." required></textarea>
                        <button type="submit" class="btn btn-primary mt-5 w-50" :disabled="isFormEmpty">Buat Tiket</button>
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
            }
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

                    alert('Tiket berhasil dibuat');
                    console.log(data);
                }
                console.log(`Status code: ${response.status}`)
            })
            .catch(err => {
                console.log('Ada kesalahan');
            })
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