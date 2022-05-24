<template>
  <div>
    <iframe class="mapillary" :src="`${segment}`" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  name: 'SegmentComponent',
  data() {
    return {
      segment:
        'https://www.mapillary.com/embed?map_style=Mapillary%20streets&image_key=964988447597085&style=classic',
    }
  },
}
</script>

<style scoped>
.mapillary {
  width: 100%;
  height: 350px;
  border-radius: 10px;
}
</style>