<template>
    <div class="container h-100">
        <div class="h-100 d-flex align-items-center justify-content-center">
            <form class="d-flex flex-column align-items-center justify-content-center border border-primary p-4" @submit.prevent="register">
                <div class="d-flex flex-column align-items-start justify-content-center w-100 p-0 mb-3">
                    <button type="button" class="border-0 bg-transparent m-0 p-0" title="kembali" @click="$router.back();"><span class="material-symbols-outlined text-danger">keyboard_arrow_left</span></button>
                </div>
                <div class="form-group mb-2">
                    <label for="" class="form-label">Email</label>
                    <input type="text" v-model="user.email" class="form-control" id="email" required>
                </div>
                <div class="form-group mb-2">
                    <label for="" class="form-label">Kata sandi</label>
                    <input type="password" v-model="user.password" class="form-control" id="password" required>
                </div>
                <button type="submit" class="btn btn-primary">Register</button>
            </form>
        </div>
    </div>
</template>
<script>
import api from '@/api/account.api';
export default {
    data() {
        return {
            user: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        register() {
            this.axios(api.register(this.user))
            .then(response => {
                if (response.status == 200) {
                    const data = response.data;

                    alert('Register berhasil. Silahkan login')
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