<template>
    <div class="container h-100">
        <div class="h-100 d-flex align-items-center justify-content-center">
            <form class="d-flex flex-column align-items-center justify-content-center border border-primary p-4" @submit.prevent="login">
                <div class="form-group mb-2">
                    <label for="" class="form-label">Email</label>
                    <input type="text" v-model="user.email" class="form-control" id="email" required>
                </div>
                <div class="form-group mb-2">
                    <label for="" class="form-label">Kata sandi</label>
                    <input type="password" v-model="user.password" class="form-control" id="password" required>
                </div>
                <button type="submit" class="btn btn-primary">Masuk</button>
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
        login() {
            this.axios(api.login(this.user))
            .then(response => {
                if (response.status == 200) {
                    const data = response.data;
                    localStorage.setItem('id', data.data.id)
                    localStorage.setItem('email', data.data.email);
                    localStorage.setItem('accessToken', data.data.token);
                    alert('Login berhasil')
                    this.$router.replace({ name: 'home' });
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