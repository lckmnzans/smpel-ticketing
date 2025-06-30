<template>
    <div class="d-flex flex-row p-2 my-2">
        <form class="border border-1 p-2">
            <div class="form-group">
                <div class="mb-2">
                    <label for="" class="form-label">Pesan 1</label>
                    <input type="text" v-model="pesan1" class="form-control" disabled/>
                </div>

                <div class="mb-2">
                    <label for="" class="form-label">Pesan 2</label>
                    <input type="text" v-model="pesan2" class="form-control" disabled/>
                </div>

                <div class="mb-2">
                    <label for="" class="form-label">Komentar</label>
                    <textarea v-model="komentar" class="form-control" placeholder="komentar anda..."></textarea>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Simpan</button>
        </form>
        <div class="border border-1 mx-2 p-2">
            <p>{{ compilation }}</p>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        compilation() {
            return this.pesan1 + this.pesan2 + this.komentar;
        }
    },
    data() {
        return {
            pesan1: 'Greeting, World!',
            pesan2: 'Greeting',
            komentar: 'Greetings all',
            compilation: '',
        }
    }
}
</script>

<style scoped>

</style>