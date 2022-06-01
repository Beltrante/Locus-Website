<template>
    <div>
        <h1 class="header">{{ name }}</h1>
        <p class="snippet">
          {{ description }}
        </p>
    </div>
</template>

<script>
    export default {
        name: "TitleDescription",
        // eslint-disable-next-line vue/require-prop-types
        props: ['name','description']
    }
</script>

<style lang="scss" scoped>

</style>