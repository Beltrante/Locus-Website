<template>
  <div class="image">
    <img
      :src="`${section.img}`"
      class="card-image img-fluid"
      :style="`border: 2px solid ${section.color}`"
      alt=""
    />
    <div class="middle"></div>
  </div>
</template>

<script>
export default {
  name: 'StaticCardComponent',
  // eslint-disable-next-line vue/require-prop-types
  props: ['section'],
}
</script>

<style scoped>
</style>