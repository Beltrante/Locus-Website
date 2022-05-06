<template>
    <NuxtLink class="card-container">
        <img src="https://picsum.photos/500/500" alt="" class="image">
    </NuxtLink>
</template>

<script>
    export default {
        name: "SmallCard"
    }
</script>

<style scoped>

.card-container {
        width: 24%;
        height: 12.5rem;
        border-radius: 0.5rem;
        overflow: hidden;
        margin-bottom: 1.5rem;
        cursor: pointer;
    }
    .image {
        width: 100%;
        height: 100%
    }

</style>