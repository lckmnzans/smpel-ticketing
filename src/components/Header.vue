<template>
    <div class="header d-flex flex-row align-items-center justify-content-between p-2 px-4">
        <h5>{{ applicationTitle }}</h5>
        <div class="d-flex flex-row gap-1">
            <span class="text me-2">Halo, {{ role }}</span>
            <button class="border border-0 bg-transparent"><span class="material-symbols-outlined text-white">account_box</span></button>
            <button class="border border-0 bg-transparent" @click.prevent="logout"><span class="material-symbols-outlined text-white">logout</span></button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        applicationTitle: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            role: 'User'
        }
    },
    created() {
        const isAdmin = localStorage.getItem('isAdmin');
        if (isAdmin == 'true') {
            this.role = 'Admin';
        } else {
            this.role = localStorage.getItem('email');
        }
    },
    methods: {
        logout() {
            localStorage.removeItem('id');
            localStorage.removeItem('email');
            localStorage.removeItem('isAdmin');
            localStorage.removeItem('accessToken');
            this.$router.replace({ name: 'login' });
        }
    }
}
</script>

<style scoped>
.header {
    background-color:darkslateblue;
    color: white;
}
</style>