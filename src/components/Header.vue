<template>
    <div class="d-flex flex-row align-items-center justify-content-between border border-1 p-2">
        <h5>{{ applicationTitle }}</h5>
        <span class="material-symbols-outlined">account_box</span>
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

</style>