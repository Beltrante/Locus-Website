<template>
  <NuxtLink to="/big-deep">
    <div class="external">
      <div class="image">
        <img :src="`${cat.img}`" class="card-image" alt="" />
      </div>
      <div class="description">{{ cat.name }}</div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: 'LargeCard',
  // eslint-disable-next-line vue/require-prop-types
  props: ['cat'],
}
</script>

<style scoped>

</style>