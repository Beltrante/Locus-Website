/* Page for the individual ITINERARY */
<template>
  <!-- class container in order to center the contend -->
  <!-- class mt-5 in order to heva a margin top of 5 units -->
  <div class="container mt-5">
    <!-- this component will include the breadcrumps in the page -->
    <BreadCrump :items="breadcrumps" />
    <!-- this component creates the entire "first row" of the page 
    composed of Title, Description and interactive map related to the 
    selected itinerary -->
    <TopSegmentDescription
      :link="itinerary.mapillaryLink"
      :name="itinerary.name"
      :description="itinerary.description"
      :duration="itinerary.duration"
    />
    <hr />
    <div class="row">
      <h2 class="subtitle">You will go through the following places</h2>
      <!-- this component is used to display the cards of the points of interest 
      involved in the selected itinerary (the card is clickable and redirects to the 
      depicted point of interest) -->
      <CardComponent
        v-for="poi in itinerary.pois"
        :id="poi.id"
        :key="poi.id"
        :name="poi.name"
        :image="poi.image"
        :path="pathToPoi"
        class="col-xl-3 p-2"
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
    // used for meta tags
    const names = data.pois.map(a => a.name)
    return {
      itinerary: data,
      involvedPlaces: names
    }
  },
  data() {
    return {
      // its used to reroute when a card is pressed
      pathToPoi: 'all-places',
    }
  },
  head() {
    return {
      title: `${this.itinerary.name} | Itineraries`,
      meta: [
        {
          hid: 'descriptionSingleItinerary',
          name: 'description',
          content: 'specific itineary and its related info: Name, description, duration, interactive map and involved places',
        },
        {
          hid: 'keywordsSingleItinerary',
          name: 'keywords',
          content: [this.involvedPlaces.toString(), "leisure", "itineray", "Bergamo"],
        },
      ],
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