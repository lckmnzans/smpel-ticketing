<template>
    <div class="d-flex flex-row align-items-center justify-content-center">
        <p>{{ footerMessage }}</p>
    </div>
</template>
<script>
export default {
    props: ['footerMessage']
}
</script>