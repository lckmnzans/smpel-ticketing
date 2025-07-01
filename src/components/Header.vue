<template>
    <div class="header d-flex flex-row align-items-center justify-content-between p-2 px-4">
        <h5>{{ applicationTitle }}</h5>
        <div class="d-flex flex-row">
            <span class="material-symbols-outlined">account_box</span>
            <span class="material-symbols-outlined">more_vert</span>
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
    }
}
</script>

<style scoped>
.header {
    background-color:darkslateblue;
    color: white;
}
</style>