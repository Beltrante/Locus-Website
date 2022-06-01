<template>
  <div class="center">
    <h3 class="bold">{{title}}</h3>
    <!-- if no height parameter is passed the defaul height of the image is used (380px) -->
    <div class="image center" :style="`height:${height};`">
      <img :src="`${image}`" class="card-image img-fluid" :alt="`${title}-img`" />
      <div class="middle"></div>
    </div>
    <h2>
      <a class="mail" :href="`mailto: ${footer}`">{{
        footer
      }}</a>
    </h2>
  </div>
</template>

<script>
export default {
  name: 'StaticCardComponent',
  props:{
    title:{type: String,
      required: false,
      default: null},
    color:{type: String,
      required: false,
      default: null},
    background:{type: String,
      required: false,
      default: null},
    image:{type: String,
      required: true,},
    footer:{type: String,
      required: false,
      default: null},
    height:{type: String,
      required: false,
      default: null}
  }

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
.image{
  height: 380px;
}
</style>