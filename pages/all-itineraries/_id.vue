<template>
  <div class="container mt-5">
    <BreadCrump :items="breadcrumps" />
    <TopSegmentDescription
      :link="itinerary.mapillaryLink"
      :name="itinerary.name"
      :description="itinerary.description"
    />
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
import BreadCrump from '~/components/BreadCrump.vue'
export default {
  name: 'SingleItinerary',
  components: {
    BreadCrump,
  },
  async asyncData({ route, $axios }) {
    // Get the id of the itinerary to show from route
    const { id } = route.params
    const { data } = await $axios.get('/api/itinerary/' + id)
    return {
      itinerary: data,
    }
  },
  data() {
    return {
      // its used to reroute when a card is pressed
      pathToPoi: 'all-pois',
    }
  },
  computed: {
    // define breadcrumbs route
    breadcrumps() {
      return [
        {
          label: 'All Itineraries',
          url: '/all-itineraries',
        },
      ]
    },
  },
}
</script>

<style scoped>
</style>