<template>
    <div class="container border border-primary">
        <DetailCard />
        <div class="footer">
            <p>Created by Lukman Sanusi</p>
        </div>
    </div>
</template>
<script>
import DetailCard from '@/components/FormCard.vue';
export default {
    components: { DetailCard }
}
</script>
<style scoped>
.footer {
    position: relative;
    background-color: cornflowerblue;
    height: 2rem;
    width: inherit;
    margin-top: auto;

    p {
        font-size: small;
        text-align: center;
    }
}
</style>
