<template>
  <div class="center">
    <h3 v-if="title" class="bold-s">{{ title }}</h3>
    <!-- if no height parameter is passed the defaul height of the image is used (380px) -->
    <div class="image-s center marg" :style="`height:${height};`">
      <img
        :src="`${image}`"
        class="card-image img-fluid"
        :alt="`${title}-img`"
      />
    </div>
    <h2>
      <a v-if="footer" class="mail" :href="`mailto: ${footer}`">{{ footer }}</a>
    </h2>
  </div>
</template>

<script>
export default {
  name: 'StaticCardComponent',
  props: {
    image: { type: String, required: true },
    title: { type: String, required: false, default: null },
    color: { type: String, required: false, default: null },
    background: { type: String, required: false, default: null },
    footer: { type: String, required: false, default: null },
    height: { type: String, required: false, default: null },
  },
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
.image-s {
  height: 380px;
}
.card-image {
  height: 350px;
}
.marg {
  margin: 10px;
}
</style>