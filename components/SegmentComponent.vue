<template>
  <div>
    <iframe class="mapillary" :src="`${link}`" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  name: 'SegmentComponent',
  props:{
    link:{
      type: String,
      required: true,
    }
  }
}
</script>

<style scoped>
.mapillary {
  width: 100%;
  height: 350px;
  border-radius: 10px;
}
</style>