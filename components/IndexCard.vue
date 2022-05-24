<template>
  <NuxtLink :to="`${section.where}`">
    <div class="image">
      <img :src="`${section.img}`" class="card-image img-fluid" :style="`border: 3px solid ${section.color}`" alt="" />
      <div class="middle">
        <h1>{{ section.name }}</h1>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: 'IndexCardComponent',
  // eslint-disable-next-line vue/require-prop-types
  props: ['section'],
}
</script>

<style scoped>
/* INIZIO CSS condiviso Component.vue +++++++++ */
.image {
  padding: 8px;
  height: 400px;
}

/* FINE CSS condiviso CardComponent.vue +++++++++ */
.img-fluid {
  width: 100%;
  height: 100%;
  opacity: 1;
  display: block;
  transition: 0.5s ease;
  backface-visibility: hidden;
}
.menu {
  padding-bottom: 6px;
  padding-top: 6px;
}
.row .menu:hover .img-fluid {
  opacity: 0.3;
}
.row .menu:hover .middle {
  opacity: 0.3;
}
.middle {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}
</style>