<template>
    <div class="footer d-flex flex-row align-items-center justify-content-center px-2">
        <p>{{ footerMessage }}</p>
    </div>
</template>

<script>
export default {
    props: ['footerMessage']
}
</script>

<style scoped>
.footer { 
    background-color: cornflowerblue;
    color: white;

    p {
        font-size: small;
        text-align: center;
    }
}
</style>