<template>
    <div>
        <p>Ini daftar tiket anda</p>
        <ul class="d-flex flex-row gap-2">
            <li v-for="(item, index) in items" :key="index">
                <div class="d-flex flex-column align-items-center">
                    <p>{{ index }}</p>
                    <p>{{ item.name }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
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
li {
    list-style: none;
    border: 1px solid black;
    width: 6rem;
}

li:hover {
    border-radius: 6px;
    cursor: pointer;
}

</style>