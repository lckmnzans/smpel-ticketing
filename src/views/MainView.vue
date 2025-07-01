<template>
    <div class="container">
        <div class="main-content border border-1 my-2 px-2">
            <p>Ini daftar tiket anda</p>
            <ul class="d-flex flex-row px-0 gap-1">
                <li v-for="(item, index) in items" :key="index">
                    <div class="d-flex flex-column">
                        <p>{{ index }}</p>
                        <p>{{ item.name }}</p>
                    </div>
                </li>
                <li>
                    <p style="text-align: center;">Tambah tiket</p>
                    <div class="d-flex flex-column align-items-center justify-content-center">
                        <span class="material-symbols-outlined">add_circle</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import FormCard from '@/components/FormCard.vue';
export default {
    components: { FormCard },
    data() {
        return {
            items : [
                {id: 1, name: 'Tiket 1'},
                {id: 2, name: 'Tiket 2'},
                {id: 3, name: 'Tiket 3'},
            ]
        }
    }
}
</script>
<style scoped>
.main-content { 

    p {
        text-align: start;

    }

    li {
        list-style: none;
        border: 0.5px solid ;
        width: 6rem;
    }

    li:hover {
        border-radius: 6px;
        cursor: pointer;
    }
}
</style>
