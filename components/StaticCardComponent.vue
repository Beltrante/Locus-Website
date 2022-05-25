<template>
  <div class="center">
    <h3 class="bold">{{ section.title }}</h3>
    <div
      class="image center"
      :style="`border: 2px solid ${section.color}; border-radius:10px; background: ${section.background};`"
    >
      <img :src="`${section.img}`" class="card-image img-fluid" alt="" />
      <div class="middle"></div>
    </div>
    <h2>
      <a class="mail" :href="`mailto: ${section.footer}`">{{
        section.footer
      }}</a>
    </h2>
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
.center {
  text-align: center;
}
.mail {
  color: black;
}
.bold {
  font-weight: 600;
}
</style>