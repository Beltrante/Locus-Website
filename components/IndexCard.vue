/* ############################## START COMPONENT DESCRIPTION ############################## */

/* this component will produce the clickable sections reported in the homepage (this component 
differs from CardComponent.vue for several styling detaild). The required parameters are:
    - the image describing (in a visual way) the content of the section;
    - a name describing the content of the section;
    - the parameters creating the path to be followed after clicking the section */
    
/* ############################## END COMPONENT DESCRIPTION ############################### */
<template>
  <NuxtLink :to="`${path}`">
    <div class="image">
      <img
        :src="`${image}`"
        class="card-image img-fluid"
        :alt="`${name}-image`"
      />
      <div class="middle">
        <h1>{{ name }}</h1>
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
    },
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
  -webkit-transition: 0.5s ease;
  -moz-transition: 0.5s ease;
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
  -webkit-transition: 0.5s ease;
  -moz-transition: 0.5s ease;
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  color: rgba(0, 0, 0, 0.866);
}

@media screen and (max-width: 992px) {
  .middle {
    color: rgba(60, 128, 125, 0.973);
    opacity: 0.9;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }
  .img-fluid {
    opacity: 0.4;
  }
}
</style>