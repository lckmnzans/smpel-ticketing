<template>
    <div class="d-flex flex-row">
        <form class="form-group">
            <div class="mb-2 form-input">
                <label for="" class="form-label">Nama Lengkap</label>
                <input type="text" v-model="namaLengkap" class="form-control" />
            </div>

            <div class="mb-2 form-input">
                <label for="" class="form-label">Email</label>
                <input type="text" v-model="email" class="form-control" />
            </div>

            <div class="mb-2 form-input">
                <label for="" class="form-label">Nomor HP</label>
                <input type="text" v-model="kontak" class="form-control" />
            </div>

            <div class="mb-2" id="ticket-detail">
                <h5>Detil Tiket</h5>
                <hr>
                <label for="" class="form-label">Ringkasan</label>
                <input type="text" v-model="judul" class="form-control" />
                <textarea v-model="detail" class="form-control" placeholder="Detail dari bantuan..."></textarea>
                <button type="submit" class="btn btn-primary mt-5">Simpan</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            namaLengkap: '',
            email: '',
            kontak: '',
            judul: '',
            detail: '',
        }
    }
}
</script>

<style scoped>
.form-group {
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
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