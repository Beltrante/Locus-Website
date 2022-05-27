<template>
  <NuxtLink :to="`${path}`">
    <div class="image">
      <img
        :src="`${image}`"
        class="card-image img-fluid"
        alt=""
      />
      <div class="middle">
        <h1>{{name}}</h1>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: 'IndexCardComponent',
  props: {
    path: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    }
  },
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
  transition: 0.5s ease;
}
.menu {
  padding-bottom: 6px;
  padding-top: 6px;
}
.row .menu:hover .img-fluid {
  opacity: 0.3;
}
.row .menu:hover .middle {
  opacity: 0.9;
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