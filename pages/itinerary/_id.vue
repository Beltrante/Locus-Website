<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <SegmentComponent :link="itinerary.mapillaryLink" />
      </div>
      <div class="col-md-6">
        <h1 class="header">{{ itinerary.name }}</h1>
        <p class="snippet">
          {{ itinerary.description }}
        </p>
      </div>
    </div>
    <hr />
    <div class="row">
      <h2 class="subtitle">You will go through the following stages</h2>
      <CardComponent
        v-for="poi in itinerary.pois"
        :id="poi.id"
        :key="poi.id"
        :name="poi.name"
        :image="poi.image"
        :path="pathToPoi"
        class="col-sm-3 p-2"
      />
    </div>
  </div>
</template>



<script>
export default {
  name: 'SingleItinerary',
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/itinerary/' + id)
    return {
      itinerary: data,
    }
  },
  data() {
    return {
      pathToPoi:"poi",
      }
    }
}
</script>

<style scoped>
</style>